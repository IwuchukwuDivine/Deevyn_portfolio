<template>
  <div class="case-study-container">
    <!-- Back link -->
    <NuxtLink to="/projects" class="back-link">
      <lucide-arrow-left :size="18" />
      <span>All Projects</span>
    </NuxtLink>

    <!-- Hero: intro + screenshot side by side -->
    <section class="case-hero">
      <div class="case-intro">
        <div class="case-meta-badges">
          <span class="meta-badge">{{ categoryLabels[project.category] }}</span>
          <span v-if="caseStudy.year" class="meta-badge">{{
            caseStudy.year
          }}</span>
        </div>
        <h1 class="case-title font-micro5-regular">{{ project.name }}</h1>
        <p class="case-role">{{ caseStudy.role }}</p>
        <p class="case-summary">{{ project.description }}</p>
        <div class="case-tech">
          <span v-for="tech in project.tech" :key="tech" class="tech-tag">
            {{ tech }}
          </span>
        </div>
        <div class="case-actions">
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link-btn"
          >
            <lucide-external-link :size="18" />
            <span>Visit Live Site</span>
          </a>
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-link-btn secondary"
          >
            <lucide-github :size="18" />
            <span>View Source</span>
          </a>
        </div>
      </div>

      <a
        v-if="project.screenshot"
        :href="project.link"
        target="_blank"
        rel="noopener noreferrer"
        class="case-screenshot-link"
        :aria-label="`Visit ${project.name} live site`"
      >
        <NuxtImg
          :src="project.screenshot"
          :alt="project.screenshotAlt ?? `${project.name} screenshot`"
          width="1280"
          height="800"
          sizes="(max-width: 900px) 100vw, 560px"
          loading="eager"
          class="case-screenshot"
        />
        <span class="screenshot-overlay">
          <lucide-external-link :size="16" />
          <span>Visit Site</span>
        </span>
      </a>
    </section>

    <!-- Problem / Solution side by side -->
    <section class="case-grid">
      <div class="case-block">
        <h2 class="block-title font-micro5-regular">
          <span class="title-bracket">[</span> The Problem
          <span class="title-bracket">]</span>
        </h2>
        <p class="block-text">{{ caseStudy.problem }}</p>
      </div>

      <div class="case-block">
        <h2 class="block-title font-micro5-regular">
          <span class="title-bracket">[</span> The Solution
          <span class="title-bracket">]</span>
        </h2>
        <p class="block-text">{{ caseStudy.solution }}</p>
      </div>
    </section>

    <!-- Highlights -->
    <section v-if="caseStudy.highlights.length" class="case-block highlights-block">
      <h2 class="block-title font-micro5-regular">
        <span class="title-bracket">[</span> Highlights
        <span class="title-bracket">]</span>
      </h2>
      <ul class="highlights-list">
        <li
          v-for="highlight in caseStudy.highlights"
          :key="highlight"
          class="highlight-item"
        >
          <span class="highlight-marker">▸</span>
          <span>{{ highlight }}</span>
        </li>
      </ul>
    </section>

    <!-- Prev / Next -->
    <section class="case-nav">
      <NuxtLink
        v-if="prevProject"
        :to="`/projects/${prevProject.slug}`"
        class="case-nav-link"
      >
        <lucide-arrow-left :size="18" />
        <div class="nav-link-text">
          <span class="nav-label">Previous</span>
          <span class="nav-name font-micro5-regular">{{
            prevProject.name
          }}</span>
        </div>
      </NuxtLink>
      <div v-else></div>
      <NuxtLink
        v-if="nextProject"
        :to="`/projects/${nextProject.slug}`"
        class="case-nav-link next"
      >
        <div class="nav-link-text">
          <span class="nav-label">Next</span>
          <span class="nav-name font-micro5-regular">{{
            nextProject.name
          }}</span>
        </div>
        <lucide-arrow-right :size="18" />
      </NuxtLink>
      <div v-else></div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ProjectCategory } from "~/utils/types";

const route = useRoute();

const project = projects.find(
  (p) => p.slug === route.params.slug && p.caseStudy
);

if (!project || !project.caseStudy) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}

const caseStudy = project.caseStudy;

const categoryLabels: Record<ProjectCategory, string> = {
  client: "Client Work",
  ai: "AI & Automation",
  "open-source": "Open Source",
  personal: "Personal Project",
  experiment: "Experiment",
};

const caseStudyProjects = projects.filter((p) => p.caseStudy);
const currentIndex = caseStudyProjects.findIndex(
  (p) => p.slug === project.slug
);
const prevProject = caseStudyProjects[currentIndex - 1];
const nextProject = caseStudyProjects[currentIndex + 1];

usePageSeo({
  title: `${project.name} — Case Study`,
  description: project.description,
  path: `/projects/${project.slug}`,
  ogImage: project.screenshot,
});
</script>

<style scoped>
.case-study-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  margin-top: 60px;
  padding: 1.5rem 2rem 3rem;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background: var(--color-background-color);
  z-index: 1;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-color);
  opacity: 0.8;
  text-decoration: none;
  margin-bottom: 1rem;
  padding: 0.4rem 0.9rem;
  border: 1px solid var(--color-primary-color);
  border-radius: 20px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.back-link:hover {
  opacity: 1;
  background: rgba(var(--color-primary-color-rgb), 0.1);
  transform: translateX(-5px);
}

/* Hero: two columns. Explicit padding: 0 overrides the global `section` padding
   from main.css, which otherwise stacks 4rem gaps between every section here. */
.case-hero {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr);
  gap: 2.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0;
}

.case-intro {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.case-meta-badges {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.meta-badge {
  background: rgba(var(--color-primary-color-rgb), 0.2);
  border: 1px solid var(--color-primary-color);
  color: var(--color-primary-color);
  padding: 0.35rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: var(--font-micro5-regular);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.case-title {
  font-size: clamp(2.2rem, 5vw, 3.2rem);
  color: var(--color-primary-color);
  text-shadow: 0 0 20px var(--color-primary-color);
  line-height: 1.05;
  margin: 0;
}

.case-role {
  font-size: 1rem;
  color: var(--color-primary-color);
  font-family: var(--font-micro5-regular);
  letter-spacing: 0.5px;
  margin: 0;
  opacity: 0.9;
}

.case-summary {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin: 0;
}

.case-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border: 1px solid var(--color-primary-color);
  color: var(--color-text-color);
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-2px);
}

.case-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.25rem;
}

.project-link-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 0.95rem;
}

.project-link-btn:hover {
  background: transparent;
  color: var(--color-primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.4);
}

.project-link-btn.secondary {
  background: transparent;
  color: var(--color-text-color);
  border-color: var(--color-text-color);
}

.project-link-btn.secondary:hover {
  background: var(--color-text-color);
  color: var(--color-background-color);
  border-color: var(--color-text-color);
}

/* Screenshot */
.case-screenshot-link {
  display: block;
  position: relative;
  line-height: 0;
  border: 2px solid var(--color-primary-color);
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.case-screenshot-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 50px rgba(var(--color-primary-color-rgb), 0.3);
}

.case-screenshot {
  width: 100%;
  height: auto;
  aspect-ratio: 1280 / 800;
  object-fit: cover;
  object-position: top;
}

.screenshot-overlay {
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid var(--color-primary-color);
  color: var(--color-primary-color);
  padding: 0.35rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  line-height: 1;
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.case-screenshot-link:hover .screenshot-overlay {
  opacity: 1;
}

/* Problem / Solution grid */
.case-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  padding: 0;
}

.case-block {
  background: rgba(var(--color-primary-color-rgb), 0.04);
  border: 2px dashed var(--color-primary-color);
  border-radius: 12px;
  padding: 1.75rem;
  transition: all 0.3s ease;
}

.case-block:hover {
  border-style: solid;
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.2);
}

.highlights-block {
  margin-bottom: 2rem;
}

.block-title {
  font-size: 1.6rem;
  color: var(--color-primary-color);
  margin-bottom: 0.75rem;
}

.block-text {
  font-size: 1rem;
  line-height: 1.75;
  color: var(--color-text-color);
  opacity: 0.9;
  margin: 0;
}

.highlights-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 0.9rem 2rem;
}

.highlight-item {
  display: flex;
  gap: 0.75rem;
  font-size: 1rem;
  line-height: 1.65;
  color: var(--color-text-color);
  opacity: 0.9;
}

.highlight-marker {
  color: var(--color-primary-color);
  flex-shrink: 0;
}

/* Prev / Next nav */
.case-nav {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 0;
}

.case-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  color: var(--color-text-color);
  border: 2px solid var(--color-primary-color);
  border-radius: 10px;
  padding: 0.75rem 1.25rem;
  transition: all 0.3s ease;
  max-width: 45%;
}

.case-nav-link:hover {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.3);
}

.nav-link-text {
  display: flex;
  flex-direction: column;
}

.nav-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  opacity: 0.7;
}

.nav-name {
  color: var(--color-primary-color);
  font-size: 1.15rem;
}

.case-nav-link.next {
  text-align: right;
  margin-left: auto;
}

/* Mobile */
@media (max-width: 900px) {
  .case-hero {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .case-study-container {
    padding: 1rem 1rem 2rem;
  }

  .case-block {
    padding: 1.25rem;
  }

  .case-actions {
    width: 100%;
    flex-direction: column;
  }

  .project-link-btn {
    width: 100%;
    justify-content: center;
  }

  .case-nav {
    flex-direction: column;
  }

  .case-nav-link {
    max-width: 100%;
  }
}
</style>
