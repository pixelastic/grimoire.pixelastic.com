<template>
  <Layout>
    <template #doc-before>
      <div v-if="isPost" class="post-header">
        <h1 class="post-title">{{ frontmatter.title }}</h1>
        <div v-if="frontmatter.date || frontmatter.tags" class="post-meta">
          <time
            v-if="frontmatter.date"
            :datetime="frontmatter.date"
            class="post-date">
            {{ formatDate(frontmatter.date) }}
          </time>
          <span
            v-if="frontmatter.tags && frontmatter.tags.length > 0"
            class="post-tags">
            <span v-for="tag in frontmatter.tags" :key="tag" class="tag">
              #{{ tag }}
            </span>
          </span>
        </div>
      </div>
    </template>
  </Layout>
</template>

<script setup>
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme';
import { computed } from 'vue';

const { Layout } = DefaultTheme;
const { page, frontmatter } = useData();

// Detect if this is a post (in /posts/ directory)
const isPost = computed(() => {
  return page.value.filePath.startsWith('posts/');
});

const formatDate = (dateString) => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<style scoped>
.post-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.post-title {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin: 0 0 1rem 0;
}

.post-meta {
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 0.95rem;
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
</style>
