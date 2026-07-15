<template>
  <div class="projects-container">
    <!-- Header Section -->
    <section class="projects-header">
      <h1 class="projects-title font-micro5-regular">
        <span class="title-bracket">[</span> Featured Projects
        <span class="title-bracket">]</span>
      </h1>
      <p class="projects-subtitle">
        Client platforms, AI experiments, and open source — built with care and
        shipped to real users. Click a preview to visit the live site, or dive
        into a case study for the story behind the build.
      </p>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-grid">
      <div
        v-for="(project, index) in featuredProjects"
        :key="project.slug"
        class="project-card"
      >
        <div class="card-content">
          <a
            v-if="project.screenshot"
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            class="screenshot-link"
            :aria-label="`Visit ${project.name} live site`"
          >
            <NuxtImg
              :src="project.screenshot"
              :alt="project.screenshotAlt ?? `${project.name} screenshot`"
              width="1280"
              height="800"
              sizes="(max-width: 768px) 100vw, 400px"
              :loading="index < 2 ? 'eager' : 'lazy'"
              class="project-screenshot"
            />
            <span class="screenshot-overlay">
              <lucide-external-link :size="16" />
              <span>Visit Site</span>
            </span>
          </a>
          <div class="card-body">
            <div class="card-header">
              <div v-if="!project.screenshot" class="project-icon">
                {{ project.icon }}
              </div>
              <div class="project-status">
                {{ categoryLabels[project.category] }}
              </div>
            </div>

            <h3 class="project-name font-micro5-regular">
              {{ project.name }}
            </h3>
            <p class="project-description">{{ project.description }}</p>

            <div class="project-tech">
              <span v-for="tech in project.tech" :key="tech" class="tech-tag">
                {{ tech }}
              </span>
            </div>

            <div class="project-links">
              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link-btn"
              >
                <lucide-external-link :size="18" />
                <span>View Live</span>
              </a>
              <NuxtLink
                v-if="project.caseStudy"
                :to="`/projects/${project.slug}`"
                class="project-link-btn secondary"
              >
                <lucide-book-open :size="18" />
                <span>Case Study</span>
              </NuxtLink>
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link-btn secondary"
              >
                <lucide-github :size="18" />
                <span>GitHub</span>
              </a>
            </div>

            <div class="card-number font-micro5-regular">
              {{ String(index + 1).padStart(2, "0") }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Smaller Experiments -->
    <section class="experiments-section">
      <h2 class="experiments-title font-micro5-regular">
        <span class="title-bracket">[</span> Smaller Experiments
        <span class="title-bracket">]</span>
      </h2>
      <div class="experiments-list">
        <div
          v-for="experiment in experiments"
          :key="experiment.slug"
          class="experiment-row"
        >
          <div class="experiment-icon">{{ experiment.icon }}</div>
          <div class="experiment-info">
            <h3 class="experiment-name font-micro5-regular">
              {{ experiment.name }}
            </h3>
            <p class="experiment-description">{{ experiment.description }}</p>
            <div class="experiment-tech">
              <span
                v-for="tech in experiment.tech"
                :key="tech"
                class="tech-tag"
              >
                {{ tech }}
              </span>
            </div>
          </div>
          <div class="experiment-links">
            <a
              :href="experiment.link"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link-btn"
            >
              <lucide-external-link :size="16" />
              <span>Live</span>
            </a>
            <a
              v-if="experiment.github"
              :href="experiment.github"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link-btn secondary"
            >
              <lucide-github :size="16" />
              <span>Code</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="projects-footer">
      <div class="footer-cta">
        <h3 class="cta-title font-micro5-regular">Want to see more?</h3>
        <p class="cta-text">
          Check out my GitHub for more projects and contributions to open
          source!
        </p>
        <a
          href="https://github.com/IwuchukwuDivine"
          target="_blank"
          rel="noopener noreferrer"
          class="cta-button"
        >
          <lucide-github :size="20" />
          <span>Visit GitHub Profile</span>
          <lucide-arrow-right :size="20" />
        </a>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import type { ProjectCategory } from "~/utils/types";

usePageSeo({
  title: "Projects",
  description:
    "Selected work by Iwuchukwu Divine — client platforms, AI agents and automation tools, open source, and personal projects built with Vue, Nuxt, and TypeScript.",
  path: "/projects",
});

const featuredProjects = computed(() => projects.filter((p) => p.featured));
const experiments = computed(() => projects.filter((p) => !p.featured));

const categoryLabels: Record<ProjectCategory, string> = {
  client: "Client Work",
  ai: "AI & Automation",
  "open-source": "Open Source",
  personal: "Personal Project",
  experiment: "Experiment",
};
</script>

<style scoped>
.projects-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  margin-top: 60px;
  background: var(--color-background-color);
  z-index: 1;
}

/* Header Section */
.projects-header {
  text-align: center;
  padding: 3rem 2rem;
}

.projects-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-text-color);
  margin-bottom: 1.5rem;
}

.projects-subtitle {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.85;
  max-width: 700px;
  margin: 0 auto;
}

/* Projects Grid Section */
.projects-grid {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2rem;
}

.project-card {
  width: 100%;
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-10px);
}

.card-content {
  background: rgba(0, 0, 0, 0.6);
  border: 2px solid var(--color-primary-color);
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Screenshot preview */
.screenshot-link {
  display: block;
  position: relative;
  border-bottom: 2px solid var(--color-primary-color);
  line-height: 0;
}

.project-screenshot {
  width: 100%;
  height: auto;
  aspect-ratio: 1280 / 800;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease, filter 0.4s ease;
}

.screenshot-link:hover .project-screenshot {
  transform: scale(1.04);
  filter: brightness(1.05);
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

.screenshot-link:hover .screenshot-overlay {
  opacity: 1;
}

.card-body {
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.card-body::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-primary-color-rgb), 0.2),
    transparent
  );
  transition: left 0.8s ease;
}

.project-card:hover .card-body::before {
  left: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.card-header:has(.project-status:only-child) {
  justify-content: flex-end;
}

.project-icon {
  font-size: 3rem;
  filter: drop-shadow(0 0 10px var(--color-primary-color));
}

.project-status {
  background: rgba(var(--color-primary-color-rgb), 0.2);
  border: 1px solid var(--color-primary-color);
  color: var(--color-primary-color);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-family: var(--font-micro5-regular);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-name {
  font-size: 2rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
  text-shadow: 0 0 15px var(--color-primary-color);
}

.project-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border: 1px solid var(--color-primary-color);
  color: var(--color-text-color);
  padding: 0.4rem 0.9rem;
  border-radius: 5px;
  font-size: 0.85rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: auto;
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

.card-number {
  position: absolute;
  bottom: 1rem;
  right: 1.5rem;
  font-size: 4rem;
  color: var(--color-primary-color);
  opacity: 0.15;
  font-weight: bold;
}

/* Smaller Experiments */
.experiments-section {
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 2rem;
}

.experiments-title {
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: var(--color-text-color);
  text-align: center;
  margin-bottom: 2rem;
}

.experiments-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.experiment-row {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  background: rgba(var(--color-primary-color-rgb), 0.04);
  border: 2px dashed var(--color-primary-color);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  transition: all 0.3s ease;
}

.experiment-row:hover {
  border-style: solid;
  transform: translateX(8px);
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.25);
}

.experiment-icon {
  font-size: 2rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 8px var(--color-primary-color));
}

.experiment-info {
  flex: 1;
  min-width: 0;
}

.experiment-name {
  font-size: 1.4rem;
  color: var(--color-primary-color);
  margin-bottom: 0.35rem;
}

.experiment-description {
  font-size: 0.95rem;
  line-height: 1.5;
  color: var(--color-text-color);
  opacity: 0.85;
  margin-bottom: 0.6rem;
}

.experiment-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.experiment-tech .tech-tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.6rem;
}

.experiment-links {
  display: flex;
  gap: 0.75rem;
  flex-shrink: 0;
}

.experiment-links .project-link-btn {
  padding: 0.5rem 1rem;
  font-size: 0.85rem;
}

/* Footer CTA */
.projects-footer {
  padding: 4rem 2rem;
  margin-top: 4rem;
}

.footer-cta {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  background: rgba(var(--color-primary-color-rgb), 0.05);
  border: 2px dashed var(--color-primary-color);
  padding: 3rem 2rem;
  border-radius: 15px;
}

.cta-title {
  font-size: 2rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
  text-shadow: 0 0 15px var(--color-primary-color);
}

.cta-text {
  font-size: 1.1rem;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background: transparent;
  color: var(--color-primary-color);
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(var(--color-primary-color-rgb), 0.4);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .projects-header {
    padding: 2rem 1rem;
    margin-bottom: 2rem;
  }

  .projects-title {
    font-size: 2rem;
  }

  .projects-subtitle {
    font-size: 1rem;
  }

  .projects-grid {
    padding: 1rem;
    grid-template-columns: 1fr;
  }

  .card-body {
    padding: 1.5rem;
  }

  .project-description {
    font-size: 1.1rem;
  }

  .project-icon {
    font-size: 2rem;
  }

  .project-status {
    font-size: 0.7rem;
    padding: 0.3rem 0.7rem;
  }

  .project-links {
    flex-direction: column;
  }

  .project-link-btn {
    width: 100%;
    justify-content: center;
  }

  .card-number {
    font-size: 3rem;
  }

  .experiments-section {
    padding: 0 1rem;
  }

  .experiment-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .experiment-links {
    width: 100%;
  }

  .experiment-links .project-link-btn {
    flex: 1;
    justify-content: center;
  }

  .footer-cta {
    padding: 2rem 1.5rem;
  }

  .cta-title {
    font-size: 1.5rem;
  }

  .cta-text {
    font-size: 1rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>
