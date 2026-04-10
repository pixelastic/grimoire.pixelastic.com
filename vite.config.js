import tailwindcss from '@tailwindcss/vite';
import config from 'aberlaas/configs/vite';

export default {
  ...config,
  plugins: [...(config.plugins || []), tailwindcss()],
};
