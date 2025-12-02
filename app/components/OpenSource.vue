<template>
  <section class="opensource-section" :class="{ 'full-page': isFullPage }">
    <h2 class="section-title">
      <span class="title-bracket">[</span>
      {{ isFullPage ? "Open Source Projects" : "Open Source & Collaboration" }}
      <span class="title-bracket">]</span>
    </h2>
    <div class="opensource-content">
      <p class="opensource-intro">
        {{
          isFullPage
            ? "Building in public and collaborating with developers worldwide. All projects are open for contributions—from beginners to experts!"
            : "I'm passionate about building in public and collaborating with like-minded developers on projects that push boundaries and create real impact. Currently diving deeper into the open source world, contributing to the Vue.js ecosystem."
        }}
      </p>

      <div class="collaboration-cards">
        <div class="collab-card">
          <div class="collab-icon">🤝</div>
          <h3 class="collab-title">Seeking Collaborators</h3>
          <p class="collab-desc">
            Always excited to work with passionate developers on side projects
            and passion projects. Let's learn, build, and grow together in
            diverse ways!
          </p>
        </div>

        <div class="collab-card">
          <div class="collab-icon">🌱</div>
          <h3 class="collab-title">Growing the Vue Community</h3>
          <p class="collab-desc">
            Creating open source Vue projects to help grow the community. While
            React dominates, Vue deserves more love and contributors!
          </p>
        </div>
      </div>

      <div
        v-for="project in displayedProjects"
        :key="project.name"
        class="featured-project"
      >
        <div class="project-badge">{{ project.badge }}</div>
        <div class="p-4">
          <div class="project-header">
            <h3 class="project-title">{{ project.name }}</h3>
            <div class="project-links">
              <a
                :href="project.githubUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link"
              >
                <span>View on GitHub</span>
                <span class="link-arrow">→</span>
              </a>
              <a
                v-if="project.liveUrl"
                :href="project.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="project-link demo-link"
              >
                <span>Live Demo</span>
                <span class="link-arrow">→</span>
              </a>
            </div>
          </div>
          <p class="project-description">
            {{ project.description }}
          </p>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag">{{
              tag
            }}</span>
          </div>
          <div class="contribution-cta">
            <div class="cta-icon">{{ project.ctaIcon }}</div>
            <div class="cta-text">
              <strong>{{ project.ctaTitle }}</strong>
              <p>{{ project.ctaDescription }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- See All Button -->
      <div v-if="showSeeAll" class="see-all-container">
        <NuxtLink to="/opensource" class="see-all-btn">
          <span>View All Open Source Projects</span>
          <span class="btn-arrow">→</span>
        </NuxtLink>
      </div>

      <!-- Contribution Guide (only on full page) -->
      <div v-if="isFullPage" class="contribution-guide">
        <h2 class="guide-title">
          <span class="title-bracket">[</span> How to Contribute
          <span class="title-bracket">]</span>
        </h2>
        <div class="guide-steps">
          <div class="step">
            <div class="step-number">1</div>
            <h3>Pick a Project</h3>
            <p>Choose any project above that interests you</p>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <h3>Read the Docs</h3>
            <p>Check the README and CONTRIBUTING.md files</p>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <h3>Find an Issue</h3>
            <p>Look for "Good First Issue" or "Help Wanted" labels</p>
          </div>
          <div class="step">
            <div class="step-number">4</div>
            <h3>Submit a PR</h3>
            <p>Fork, code, and create a pull request!</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { openSourceProjects } from "~/utils/appData";

const props = withDefaults(
  defineProps<{
    showSeeAll?: boolean;
    isFullPage?: boolean;
    limit?: number;
  }>(),
  {
    showSeeAll: false,
    isFullPage: false,
    limit: 0, // 0 means show all
  }
);

const displayedProjects = computed(() => {
  if (props.limit > 0) {
    return openSourceProjects.slice(0, props.limit);
  }
  return openSourceProjects;
});
</script>
<style scoped>
/* Open Source Section */
.opensource-section {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(var(--color-primary-color-rgb), 0.03);
  border-radius: 15px;
  padding: 4rem 3rem;
}

.opensource-section.full-page {
  max-width: 1400px;
  background: transparent;
  padding: 2rem;
  min-height: 100vh;
  margin-top: 80px;
}

.opensource-intro {
  text-align: center;
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.collaboration-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.collab-card {
  background: transparent;
  border: 2px dashed var(--color-primary-color);
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: all 0.3s ease;
}

.collab-card:hover {
  border-style: solid;
  transform: translateY(-5px);
  box-shadow: 0 5px 30px rgba(var(--color-primary-color-rgb), 0.3);
}

.collab-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.collab-title {
  font-family: var(--font-micro5-regular);
  font-size: 1.5rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
}

.collab-desc {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text-color);
  opacity: 0.85;
}

/* Featured Project */
.featured-project {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--color-primary-color);
  border-radius: 15px;
  padding: 0;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
}

.featured-project:last-child {
  margin-bottom: 0;
}

.featured-project:hover {
  box-shadow: 0 10px 40px rgba(var(--color-primary-color-rgb), 0.4);
  transform: translateY(-3px);
}

.project-badge {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  padding: 0.5rem 1.5rem;
  font-family: var(--font-micro5-regular);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.project-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.project-title {
  font-family: var(--font-micro5-regular);
  font-size: 1.8rem;
  color: var(--color-primary-color);
  margin: 0;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-text-color);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-primary-color);
  border-radius: 5px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.project-link:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateX(5px);
}

.link-arrow {
  transition: transform 0.3s ease;
}

.project-link:hover .link-arrow {
  transform: translateX(3px);
}

.demo-link {
  background: rgba(var(--color-primary-color-rgb), 0.1);
}

.project-description {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 1.5rem;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 2rem;
}

.tag {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border: 1px solid var(--color-primary-color);
  color: var(--color-primary-color);
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 1.3rem;
  font-family: var(--font-micro5-regular);
  transition: all 0.3s ease;
}

.tag:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: scale(1.05);
}

.contribution-cta {
  background: rgba(var(--color-primary-color-rgb), 0.08);
  border-left: 4px solid var(--color-primary-color);
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
}

.cta-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.cta-text strong {
  color: var(--color-primary-color);
  font-family: var(--font-micro5-regular);
  font-size: 1.4rem;
  display: block;
  margin-bottom: 0.5rem;
}

.cta-text p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-color);
  opacity: 0.85;
}

/* See All Button */
.see-all-container {
  text-align: center;
  margin-top: 3rem;
}

.see-all-btn {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border-radius: 10px;
  font-family: var(--font-micro5-regular);
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid var(--color-primary-color);
}

.see-all-btn:hover {
  background: transparent;
  color: var(--color-primary-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.4);
}

.btn-arrow {
  transition: transform 0.3s ease;
  font-size: 1.5rem;
}

.see-all-btn:hover .btn-arrow {
  transform: translateX(5px);
}

/* Contribution Guide */
.contribution-guide {
  background: rgba(var(--color-primary-color-rgb), 0.03);
  border-radius: 15px;
  padding: 3rem 2rem;
  text-align: center;
  margin-top: 4rem;
}

.guide-title {
  font-family: var(--font-micro5-regular);
  font-size: 2rem;
  color: var(--color-primary-color);
  margin-bottom: 3rem;
}

.guide-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.step {
  padding: 1.5rem;
  border-radius: 10px;
  background: rgba(var(--color-primary-color-rgb), 0.05);
  border: 1px solid var(--color-primary-color);
  transition: all 0.3s ease;
}

.step:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.2);
}

.step-number {
  width: 50px;
  height: 50px;
  margin: 0 auto 1rem;
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-micro5-regular);
  font-size: 1.5rem;
  font-weight: bold;
}

.step h3 {
  font-family: var(--font-micro5-regular);
  font-size: 1.2rem;
  color: var(--color-primary-color);
  margin-bottom: 0.5rem;
}

.step p {
  font-size: 0.95rem;
  color: var(--color-text-color);
  opacity: 0.85;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .opensource-section.full-page {
    padding: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .opensource-intro {
    font-size: 1rem;
  }

  .collaboration-cards {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-links {
    width: 100%;
  }

  .project-link {
    flex: 1;
    justify-content: center;
  }
}
</style>
