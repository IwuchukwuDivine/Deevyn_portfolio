<template>
  <section class="opensource-section">
    <h2 class="section-title">
      <span class="title-bracket">[</span> Open Source & Collaboration
      <span class="title-bracket">]</span>
    </h2>
    <div class="opensource-content">
      <p class="opensource-intro">
        I'm passionate about building in public and collaborating with
        like-minded developers on projects that push boundaries and create real
        impact. Currently diving deeper into the open source world, contributing
        to the Vue.js ecosystem.
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

      <div class="featured-project">
        <div class="project-badge">Featured Open Source Project</div>
        <div class="project-content">
          <div class="project-header">
            <h3 class="project-title">HTML to Vue Converter</h3>
            <a
              href="https://github.com/IwuchukwuDivine/html_vue_converter"
              target="_blank"
              rel="noopener noreferrer"
              class="project-link"
            >
              <span>View on GitHub</span>
              <span class="link-arrow">→</span>
            </a>
          </div>
          <p class="project-description">
            A powerful tool that instantly converts vanilla HTML to Vue 3 Single
            File Components. Supports both Composition API and Options API with
            smart parsing.
          </p>
          <div class="project-tags">
            <span class="tag">Beginner Friendly</span>
            <span class="tag">Good First Issue</span>
            <span class="tag">Vue 3</span>
            <span class="tag">TypeScript</span>
            <span class="tag">Open Source</span>
          </div>
          <div class="contribution-cta">
            <div class="cta-icon">🚀</div>
            <div class="cta-text">
              <strong>Open for Contributions!</strong>
              <p>
                Perfect for beginners and anyone looking to dive into open
                source. You don't need to be a Vue expert—just bring your
                enthusiasm to learn!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>
<style scoped>
/* Open Source Section */
.opensource-section {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(var(--color-primary-color-rgb), 0.03);
  border-radius: 15px;
  padding: 4rem 3rem;
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

.project-content {
  padding: 2rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
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
</style>
