import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Grimoire',
  description: 'Tabletop RPG discoveries',

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Inspirations', link: '/inspirations/' },
      { text: 'Reviews', link: '/reviews/' },
      { text: 'About', link: '/about' },
    ],

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/pixelastic/grimoire.pixelastic.com',
      },
    ],
  },

  // Build output directory
  outDir: '../dist',

  // Clean URLs (sans .html)
  cleanUrls: true,
});
