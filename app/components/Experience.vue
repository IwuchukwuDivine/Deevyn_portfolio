<template>
  <section class="experience-section">
    <h2 class="section-title">
      <span class="title-bracket">[</span> Work Experience
      <span class="title-bracket">]</span>
    </h2>
    <div class="experience-timeline">
      <div
        v-for="entry in experience"
        :key="entry.company"
        class="experience-block"
      >
        <div class="experience-header">
          <div>
            <h3 class="experience-role font-micro5-regular">
              {{ entry.role }}
            </h3>
            <div class="experience-company">{{ entry.company }}</div>
          </div>
          <div class="experience-meta">
            <div class="experience-period">{{ entry.period }}</div>
            <div class="experience-location">
              {{ entry.location }} · {{ entry.type }}
            </div>
          </div>
        </div>
        <p class="experience-summary">{{ entry.summary }}</p>
        <ul v-if="entry.highlights.length" class="experience-highlights">
          <li
            v-for="highlight in entry.highlights"
            :key="highlight"
            class="experience-highlight"
          >
            <span class="highlight-marker">▸</span>
            <span>{{ highlight }}</span>
          </li>
        </ul>
        <div v-if="entry.tech.length" class="experience-tech">
          <span v-for="tech in entry.tech" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.experience-section {
  max-width: 1200px;
  margin: 0 auto;
}

.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-block {
  background: rgba(var(--color-primary-color-rgb), 0.03);
  border: 2px dashed var(--color-primary-color);
  border-radius: 10px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.experience-block:hover {
  border-style: solid;
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.3);
  transform: translateX(10px);
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.experience-role {
  font-size: 1.8rem;
  color: var(--color-primary-color);
  margin-bottom: 0.35rem;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.experience-company {
  font-size: 1.05rem;
  color: var(--color-text-color);
  font-weight: 600;
}

.experience-meta {
  text-align: right;
}

.experience-period {
  font-family: var(--font-micro5-regular);
  font-size: 1.1rem;
  color: var(--color-primary-color);
  letter-spacing: 1px;
}

.experience-location {
  font-size: 0.85rem;
  color: var(--color-text-color);
  opacity: 0.7;
  font-style: italic;
  text-transform: capitalize;
}

.experience-summary {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 1.25rem;
}

.experience-highlights {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.experience-highlight {
  display: flex;
  gap: 0.75rem;
  font-size: 0.98rem;
  line-height: 1.6;
  color: var(--color-text-color);
  opacity: 0.85;
}

.highlight-marker {
  color: var(--color-primary-color);
  flex-shrink: 0;
}

.experience-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-tag {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border: 1px solid var(--color-primary-color);
  color: var(--color-text-color);
  padding: 0.3rem 0.75rem;
  border-radius: 5px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .experience-block {
    padding: 1.5rem;
  }

  .experience-block:hover {
    transform: translateX(5px);
  }

  .experience-header {
    flex-direction: column;
  }

  .experience-meta {
    text-align: left;
  }
}
</style>
