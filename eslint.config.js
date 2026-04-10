import config from 'aberlaas/configs/eslint';

export default [
  ...config,
  {
    ignores: ['.vitepress/cache/*', '.vitepress/dist/*', 'dist/*'],
  },
  {
    files: ['.vitepress/theme/**/*.vue', '.vitepress/theme/**/*.js'],
    rules: {
      'import/named': 'off', // VitePress generates exports dynamically
    },
  },
];
