import config from 'aberlaas/configs/eslint';

export default [
  ...config,
  {
    ignores: ['.vitepress/cache/*', '.vitepress/dist/*', 'dist/*'],
  },
];
