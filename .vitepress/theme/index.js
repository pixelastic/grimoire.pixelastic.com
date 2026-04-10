import DefaultTheme from 'vitepress/theme';
import ImageGallery from './components/ImageGallery.vue';
import RiverOfNews from './components/RiverOfNews.vue';
import PostLayout from './PostLayout.vue';

export default {
  extends: DefaultTheme,
  Layout: PostLayout,
  enhanceApp({ app }) {
    app.component('ImageGallery', ImageGallery);
    app.component('RiverOfNews', RiverOfNews);
  },
};
