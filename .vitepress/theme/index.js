import DefaultTheme from 'vitepress/theme';
import ImageGallery from './components/ImageGallery.vue';

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ImageGallery', ImageGallery);
  },
};
