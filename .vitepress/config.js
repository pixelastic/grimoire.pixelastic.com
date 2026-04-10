import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Grimoire',
  description: 'Tabletop RPG discoveries',

  // Exclude workflows from build (dev-only documentation)
  srcExclude: ['**/workflows/**'],

  // Vite configuration with Tailwind
  vite: {
    plugins: [tailwindcss()],
  },

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
