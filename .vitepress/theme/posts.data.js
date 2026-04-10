import { createContentLoader } from 'vitepress';

/**
 * Fix relative image paths in HTML to be absolute
 * @param {string} html - The HTML content
 * @param {string} url - The post URL (e.g., /posts/inspirations/2022-01/)
 * @returns {string} - HTML with fixed image paths
 */
function fixImagePaths(html, url) {
  // Extract the directory path from the URL
  // e.g., /posts/inspirations/2022-01/ or /posts/inspirations/2022-01
  const urlDir = url.endsWith('/') ? url : url + '/';

  // Replace relative image sources with absolute paths
  return html.replace(/<img([^>]+)src="([^"]+)"/g, (match, attrs, src) => {
    // Only fix relative paths (not already absolute or external)
    if (!src.startsWith('/') && !src.startsWith('http')) {
      return `<img${attrs}src="${urlDir}${src}"`;
    }
    return match;
  });
}

/**
 * Wrap consecutive image paragraphs in a gallery container
 * @param {string} html - The HTML content
 * @returns {string} - HTML with image galleries
 */
function wrapImageGalleries(html) {
  // Match consecutive <p><img...></p> blocks (with optional HTML comments between)
  const imageParaRegex = /(<p>(?:<!--.*?-->)?\s*<img[^>]+>\s*<\/p>\s*)+/g;

  return html.replace(imageParaRegex, (match) => {
    // Count how many images are in this group
    const imageCount = (match.match(/<img/g) || []).length;

    // Only create a gallery if there are 2+ images
    if (imageCount >= 2) {
      return `<div class="image-gallery">${match}</div>`;
    }

    return match;
  });
}

export default createContentLoader('posts/**/*.md', {
  includeSrc: false,
  render: true, // Render full HTML for each post
  excerpt: false,
  transform(rawData) {
    // Sort by date in reverse chronological order (newest first)
    return rawData
      .sort((a, b) => {
        const dateA = new Date(a.frontmatter.date || '1970-01-01');
        const dateB = new Date(b.frontmatter.date || '1970-01-01');
        return dateB - dateA;
      })
      .map((page) => ({
        url: page.url,
        title: page.frontmatter.title,
        date: page.frontmatter.date,
        description: page.frontmatter.description,
        tags: page.frontmatter.tags || [],
        html: wrapImageGalleries(fixImagePaths(page.html, page.url)), // Fix image paths and wrap galleries
      }));
  },
});
