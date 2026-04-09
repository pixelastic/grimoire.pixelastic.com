import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Grimoire',
  description: 'Découvertes de jeux de rôle',

  themeConfig: {
    nav: [
      { text: 'Accueil', link: '/' },
      { text: 'Posts', link: '/posts/' },
    ],

    sidebar: {
      '/posts/': [
        {
          text: 'Inspirations',
          items: [
            {
              text: 'Terrain Crafting Inspirations',
              link: '/posts/inspirations/2022-01/',
            },
          ],
        },
      ],
    },

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
