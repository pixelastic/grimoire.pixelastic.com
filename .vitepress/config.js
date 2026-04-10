import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Grimoire',
  description: 'Découvertes de jeux de rôle',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
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
