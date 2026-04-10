<template>
  <div class="image-gallery">
    <slot />
  </div>
</template>

<style scoped>
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
}

.image-gallery :deep(img) {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.image-gallery :deep(img:hover) {
  transform: scale(1.02);
}

/* Hide the comment markers that precede images */
.image-gallery :deep(p) {
  display: contents;
}
</style>
