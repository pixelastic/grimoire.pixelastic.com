<template>
  <div class="river-of-news">
    <h1>{{ title }}</h1>
    <p class="tagline">{{ tagline }}</p>

    <div v-if="paginatedPosts.length > 0" class="posts-container">
      <article v-for="post in paginatedPosts" :key="post.url" class="post">
        <header class="post-header">
          <h2>
            <a :href="post.url" class="post-title">{{ post.title }}</a>
          </h2>
          <div class="post-meta">
            <time :datetime="post.date" class="post-date">
              {{ formatDate(post.date) }}
            </time>
            <span v-if="post.tags && post.tags.length > 0" class="post-tags">
              <span v-for="tag in post.tags" :key="tag" class="tag">
                #{{ tag }}
              </span>
            </span>
          </div>
        </header>
        <div class="post-content" v-html="post.html"></div>
      </article>
    </div>

    <div v-else class="no-posts">
      <p>No posts yet.</p>
    </div>

    <nav v-if="totalPages > 1" class="pagination">
      <button
        @click="goToPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="pagination-button">
        ← Previous
      </button>
      <span class="pagination-info">
        Page {{ currentPage }} of {{ totalPages }}
      </span>
      <button
        @click="goToPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="pagination-button">
        Next →
      </button>
    </nav>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { data as allPosts } from '../posts.data.js';

const props = defineProps({
  title: {
    type: String,
    default: 'Grimoire',
  },
  tagline: {
    type: String,
    default: 'Tabletop RPG discoveries',
  },
  postsPerPage: {
    type: Number,
    default: 5,
  },
});

const currentPage = ref(1);

// Computed properties
const totalPages = computed(() => {
  return Math.ceil(allPosts.length / props.postsPerPage);
});

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * props.postsPerPage;
  const end = start + props.postsPerPage;
  return allPosts.slice(start, end);
});

// Methods
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Update URL with page number (optional)
    const url = new URL(window.location);
    if (page === 1) {
      url.searchParams.delete('page');
    } else {
      url.searchParams.set('page', page);
    }
    window.history.pushState({}, '', url);
  }
};

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// On mount, check for page parameter in URL
onMounted(() => {
  const params = new URLSearchParams(window.location.search);
  const page = parseInt(params.get('page') || '1', 10);
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
});
</script>

<style scoped>
.river-of-news {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 0.5rem;
}

.tagline {
  font-size: 1.25rem;
  color: var(--vp-c-text-2);
  margin-bottom: 3rem;
}

.posts-container {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.post {
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 3rem;
}

.post:last-child {
  border-bottom: none;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-title {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-size: 2rem;
  font-weight: 600;
  transition: color 0.2s;
}

.post-title:hover {
  color: var(--vp-c-brand-2);
}

.post-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
}

.post-date {
  font-style: italic;
}

.post-tags {
  display: flex;
  gap: 0.5rem;
}

.tag {
  background: var(--vp-c-default-soft);
  padding: 0.125rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.post-content {
  line-height: 1.7;
}

/* Image gallery styling - matches ImageGallery.vue */
.post-content :deep(.image-gallery) {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.post-content :deep(.image-gallery p) {
  display: contents;
  margin: 0;
}

.post-content :deep(.image-gallery img) {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.post-content :deep(.image-gallery img:hover) {
  transform: scale(1.02);
}

/* Regular images (not in gallery) */
.post-content :deep(img:not(.image-gallery img)) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.no-posts {
  text-align: center;
  padding: 4rem 0;
  color: var(--vp-c-text-2);
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
}

.pagination-button {
  padding: 0.5rem 1rem;
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.pagination-button:hover:not(:disabled) {
  background: var(--vp-c-brand-2);
}

.pagination-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-info {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
}
</style>
