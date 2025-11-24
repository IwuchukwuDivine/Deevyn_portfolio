<template>
  <div class="hobbies-container">
    <!-- Header Section -->
    <section class="hobbies-header">
      <h1 class="hobbies-title font-micro5-regular">
        <span class="title-bracket">[</span> Beyond The Code
        <span class="title-bracket">]</span>
      </h1>
      <p class="hobbies-subtitle">
        Life isn't just about writing code. Here's what keeps me balanced,
        inspired, and creative outside the digital world.
      </p>
    </section>

    <!-- Hobbies Grid -->
    <section class="hobbies-section">
      <!-- Reading -->
      <div class="hobby-card">
        <div class="hobby-icon">📚</div>
        <h3 class="hobby-title font-micro5-regular">Reading</h3>
        <p class="hobby-description">
          There was a time when I could devour 5 books a day—no exaggeration. I
          even started a book club to share my love of stories with others.
          These days, time is scarce, and reading has taken a backseat. But the
          dream of getting back to those immersive reading sessions is always
          alive.
        </p>
        <div class="hobby-status">
          Currently on hiatus... but never forgotten
        </div>
      </div>

      <!-- Movies & Series -->
      <div class="hobby-card">
        <div class="hobby-icon">🎬</div>
        <h3 class="hobby-title font-micro5-regular">Movies & Series</h3>
        <p class="hobby-description">
          These days, shows are mostly background noise while I work or unwind.
          But two series truly stuck with me and left an impact:
          <strong>Shameless</strong> and
          <strong>Orange is the New Black</strong>. Raw, real, and
          unforgettable.
        </p>
        <div class="favorite-shows">
          <span class="show-tag">Shameless</span>
          <span class="show-tag">Orange is the New Black</span>
        </div>
      </div>

      <!-- Handmade Crafts -->
      <div class="hobby-card highlight">
        <div class="hobby-icon">🧶</div>
        <h3 class="hobby-title font-micro5-regular">
          Handmade Crafts & Crochet
        </h3>
        <p class="hobby-description">
          I'm obsessed with learning handmade crafts, especially crochet. Every
          stitch is therapy, every project is a story. My dream? To one day own
          a tufting business creating custom handmade rugs where art meets
          comfort.
        </p>
        <div class="stats-row">
          <div class="stat">
            <div class="stat-number">1000+</div>
            <div class="stat-label">Projects Completed</div>
          </div>
          <div class="stat">
            <div class="stat-number">100%</div>
            <div class="stat-label">Handmade</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Crochet Gallery -->
    <section class="gallery-section">
      <h2 class="gallery-title font-micro5-regular">
        <span class="title-bracket">[</span> Crochet Gallery
        <span class="title-bracket">]</span>
      </h2>
      <p class="gallery-intro">
        A glimpse into a thousand projects. Every piece crafted with love,
        patience, and lots of yarn.
      </p>

      <div class="masonry-grid" ref="galleryRef">
        <div
          v-for="(image, index) in crochetImages"
          :key="index"
          class="gallery-item"
          @click="openLightbox(index)"
        >
          <img
            :src="image"
            :alt="`Crochet project ${index + 1}`"
            loading="lazy"
          />
          <div class="image-overlay">
            <lucide-zoom-in :size="32" />
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox -->
    <Transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click="closeLightbox">
        <button class="lightbox-close" @click.stop="closeLightbox">
          <lucide-x :size="32" />
        </button>
        <button
          class="lightbox-nav prev"
          @click.stop="prevImage"
          v-if="currentImageIndex > 0"
        >
          <lucide-chevron-left :size="32" />
        </button>
        <button
          class="lightbox-nav next"
          @click.stop="nextImage"
          v-if="currentImageIndex < crochetImages.length - 1"
        >
          <lucide-chevron-right :size="32" />
        </button>
        <div class="lightbox-content" @click.stop>
          <img
            :src="crochetImages[currentImageIndex]"
            :alt="`Crochet project ${currentImageIndex + 1}`"
          />
          <div class="lightbox-counter">
            {{ currentImageIndex + 1 }} / {{ crochetImages.length }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const lightboxOpen = ref(false);
const currentImageIndex = ref(0);
const galleryRef = ref<HTMLElement | null>(null);

const openLightbox = (index: number) => {
  currentImageIndex.value = index;
  lightboxOpen.value = true;
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightboxOpen.value = false;
  document.body.style.overflow = "";
};

const nextImage = () => {
  if (currentImageIndex.value < crochetImages.length - 1) {
    currentImageIndex.value++;
  }
};

const prevImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--;
  }
};

// Keyboard navigation
onMounted(() => {
  const handleKeydown = (e: KeyboardEvent) => {
    if (!lightboxOpen.value) return;

    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  window.addEventListener("keydown", handleKeydown);

  return () => {
    window.removeEventListener("keydown", handleKeydown);
  };
});
</script>

<style scoped>
.hobbies-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  margin-top: 60px;
}

/* Header Section */
.hobbies-header {
  text-align: center;
  padding: 3rem 2rem;
  margin-bottom: 2rem;
}

.hobbies-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-text-color);
  margin-bottom: 1.5rem;
}

.title-bracket {
  color: var(--color-primary-color);
  font-size: 1.2em;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.hobbies-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.85;
  max-width: 700px;
  margin: 0 auto;
}

/* Hobbies Section */
.hobbies-section {
  max-width: 1200px;
  margin: 0 auto 4rem;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
}

.hobby-card {
  background: rgba(0, 0, 0, 0.4);
  border: 2px dashed var(--color-primary-color);
  border-radius: 15px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.hobby-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-primary-color-rgb), 0.1),
    transparent
  );
  transition: left 0.6s ease;
}

.hobby-card:hover::before {
  left: 100%;
}

.hobby-card:hover {
  border-style: solid;
  box-shadow: 0 5px 30px rgba(var(--color-primary-color-rgb), 0.3);
  transform: translateY(-5px);
}

.hobby-card.highlight {
  border-color: var(--color-primary-color);
  border-style: solid;
  background: rgba(var(--color-primary-color-rgb), 0.05);
}

.hobby-icon {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 10px var(--color-primary-color));
}

.hobby-title {
  font-size: 1.8rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.hobby-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.hobby-description strong {
  color: var(--color-primary-color);
  font-weight: 600;
}

.hobby-status {
  font-size: 0.85rem;
  font-style: italic;
  color: var(--color-text-color);
  opacity: 0.7;
  text-align: center;
  padding: 0.5rem;
  border-top: 1px solid rgba(var(--color-primary-color-rgb), 0.3);
  margin-top: 1rem;
}

.favorite-shows {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.show-tag {
  background: rgba(var(--color-primary-color-rgb), 0.2);
  border: 1px solid var(--color-primary-color);
  color: var(--color-primary-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.show-tag:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: scale(1.05);
}

.stats-row {
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
  justify-content: center;
}

.stat {
  text-align: center;
}

.stat-number {
  font-family: var(--font-micro5-regular);
  font-size: 2rem;
  color: var(--color-primary-color);
  font-weight: bold;
  text-shadow: 0 0 15px var(--color-primary-color);
}

.stat-label {
  font-size: 0.85rem;
  color: var(--color-text-color);
  opacity: 0.8;
  margin-top: 0.3rem;
}

/* Gallery Section */
.gallery-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.gallery-title {
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  color: var(--color-text-color);
  margin-bottom: 1rem;
}

.gallery-intro {
  text-align: center;
  font-size: 1.05rem;
  color: var(--color-text-color);
  opacity: 0.85;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

/* Masonry Grid */
.masonry-grid {
  column-count: 4;
  column-gap: 1.5rem;
}

.gallery-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  cursor: pointer;
}

.gallery-item:hover {
  border-color: var(--color-primary-color);
  box-shadow: 0 5px 25px rgba(var(--color-primary-color-rgb), 0.4);
  transform: scale(1.02);
}

.gallery-item img {
  width: 100%;
  display: block;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: var(--color-primary-color);
}

.gallery-item:hover .image-overlay {
  opacity: 1;
}

/* Lightbox */
.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.95);
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  backdrop-filter: blur(10px);
}

.lightbox-content {
  max-width: 90vw;
  max-height: 90vh;
  position: relative;
}

.lightbox-content img {
  max-width: 100%;
  max-height: 85vh;
  border-radius: 10px;
  border: 3px solid var(--color-primary-color);
  box-shadow: 0 0 40px var(--color-primary-color);
}

.lightbox-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--color-primary-color);
  color: var(--color-text-color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10001;
}

.lightbox-close:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: rotate(90deg);
}

.lightbox-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.7);
  border: 2px solid var(--color-primary-color);
  color: var(--color-text-color);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10001;
}

.lightbox-nav:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-50%) scale(1.1);
}

.lightbox-nav.prev {
  left: 2rem;
}

.lightbox-nav.next {
  right: 2rem;
}

.lightbox-counter {
  position: absolute;
  bottom: -2.5rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--color-text-color);
  font-family: var(--font-micro5-regular);
  font-size: 1.2rem;
  background: rgba(0, 0, 0, 0.7);
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  border: 1px solid var(--color-primary-color);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Mobile Responsiveness */
@media (max-width: 1024px) {
  .masonry-grid {
    column-count: 3;
  }
}

@media (max-width: 768px) {
  .hobbies-header {
    padding: 2rem 1rem;
  }

  .hobbies-section {
    padding: 1rem;
    grid-template-columns: 1fr;
  }

  .hobby-card {
    padding: 2rem;
  }

  .stats-row {
    gap: 1.5rem;
  }

  .masonry-grid {
    column-count: 2;
    column-gap: 1rem;
  }

  .gallery-item {
    margin-bottom: 1rem;
  }

  .gallery-section {
    padding: 1rem;
  }

  .lightbox-nav {
    width: 40px;
    height: 40px;
  }

  .lightbox-nav.prev {
    left: 1rem;
  }

  .lightbox-nav.next {
    right: 1rem;
  }

  .lightbox-close {
    top: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    column-count: 1;
  }
}
</style>
