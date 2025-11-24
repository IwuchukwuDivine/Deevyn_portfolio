<template>
  <div class="home-container pt-[140px]">
    <game-of-life />

    <!-- Hero Section -->
    <section class="hero-section">
      <div class="glitch-wrapper">
        <h1 class="hero-title font-micro5-regular">
          <span class="glitch" data-text="Iwuchukwu Divine"
            >Iwuchukwu Divine</span
          >
        </h1>
      </div>
      <div class="hero-subtitle font-chewy-regular">
        <span class="typed-text">{{ typedText }}</span>
        <span class="cursor">|</span>
      </div>
      <p class="hero-description">
        Transforming ideas into reality through code. With 5 years of crafting
        digital experiences, I specialize in building scalable web applications
        and cutting-edge drone automation systems.
      </p>
      <div class="hero-stats">
        <div class="stat-item">
          <div class="stat-number">5+</div>
          <div class="stat-label">Years Experience</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">20+</div>
          <div class="stat-label">Projects Delivered</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">∞</div>
          <div class="stat-label">Lines of Code</div>
        </div>
      </div>
    </section>

    <!-- Expertise Section -->
    <section class="expertise-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> Expertise
        <span class="title-bracket">]</span>
      </h2>
      <div class="expertise-grid">
        <div class="expertise-card">
          <div class="card-icon">🌐</div>
          <h3 class="card-title">Web Development</h3>
          <p class="card-desc">
            Mastery in Vue.js, Nuxt, and modern web frameworks. Building
            responsive, performant web applications with exceptional UX and
            Progressive Web Apps (PWA) for offline-first experiences.
          </p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">📱</div>
          <h3 class="card-title">Mobile App Development</h3>
          <p class="card-desc">
            Cross-platform mobile applications using React Native and Capacitor.
            Native performance with shared codebases for iOS and Android.
          </p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">🛒</div>
          <h3 class="card-title">E-Commerce Solutions</h3>
          <p class="card-desc">
            End-to-end e-commerce platforms with seamless payment integration,
            inventory management, and scalable architecture.
          </p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">🔗</div>
          <h3 class="card-title">Web3 & Blockchain</h3>
          <p class="card-desc">
            P2P exchange platforms, smart contracts, and decentralized
            applications bridging traditional web with blockchain technology.
          </p>
        </div>
        <div class="expertise-card">
          <div class="card-icon">🚁</div>
          <h3 class="card-title">Drone Tech & Automation</h3>
          <p class="card-desc">
            DFR flight planning tools, automation systems, docking stations, and
            3D map rendering with Cesium at iDrone Innovations.
          </p>
        </div>
      </div>
    </section>

    <!-- Open Source & Collaboration -->
    <section class="opensource-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> Open Source & Collaboration
        <span class="title-bracket">]</span>
      </h2>
      <div class="opensource-content">
        <p class="opensource-intro">
          I'm passionate about building in public and collaborating with
          like-minded developers on projects that push boundaries and create
          real impact. Currently diving deeper into the open source world,
          contributing to the Vue.js ecosystem.
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
              Creating open source Vue projects to help grow the community.
              While React dominates, Vue deserves more love and contributors!
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
              A powerful tool that instantly converts vanilla HTML to Vue 3
              Single File Components. Supports both Composition API and Options
              API with smart parsing.
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

    <!-- Skills Galaxy -->
    <section class="skills-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> Tech Universe
        <span class="title-bracket">]</span>
      </h2>
      <Skills />
    </section>

    <!-- Education Section -->
    <section class="education-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> Education & Certifications
        <span class="title-bracket">]</span>
      </h2>
      <div class="education-grid">
        <div class="education-block">
          <div class="edu-icon">🎓</div>
          <div class="edu-content">
            <div class="edu-degree">University Education</div>
            <div class="edu-field">University of Port Harcourt</div>
            <div class="edu-location">Rivers State, Nigeria</div>
          </div>
        </div>
        <div class="education-block">
          <div class="edu-icon">📚</div>
          <div class="edu-content">
            <div class="edu-degree">Secondary Education</div>
            <div class="edu-field">Carol Standard Convent</div>
            <div class="edu-location">Ichi, Anambra State</div>
          </div>
        </div>
        <div class="education-block">
          <div class="edu-icon">✏️</div>
          <div class="edu-content">
            <div class="edu-degree">Primary Education</div>
            <div class="edu-field">
              Federal College of Education Staff School
            </div>
            <div class="edu-location">Akoka, Lagos</div>
          </div>
        </div>
      </div>
    </section>

    <!-- First Deploy Section -->
    <section class="first-deploy-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> The First Deploy
        <span class="title-bracket">]</span>
      </h2>
      <div class="first-deploy-content">
        <div class="deploy-badge">
          <span class="badge-icon">🌸</span>
          <span class="badge-text">Est. 2021</span>
        </div>
        <p class="deploy-intro">
          Every developer remembers their first website. Mine was a love letter
          to the three things that defined me:
          <strong>web development</strong> (which I was just learning),
          <strong>crocheting</strong> (1000+ projects strong), and
          <strong>good food</strong>. No frameworks, no fancy animations—just
          pure HTML, CSS, JavaScript, and determination.
        </p>
        <div class="deploy-highlight">
          <div class="highlight-icon">💫</div>
          <div class="highlight-content">
            <h3 class="highlight-title">
              From "Hello World" to Hello Universe
            </h3>
            <p class="highlight-text">
              That first deployment taught me the fundamentals. Now I build with
              Vue, Nuxt, TypeScript, and all the fancy tools—but I'll never
              forget where it started. The crochet passion? Still going strong.
              The cooking skills? Still experimenting. The code? Well, let's
              just say it's evolved a bit. 😄
            </p>
          </div>
        </div>
        <a
          href="https://deevine.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          class="deploy-button"
        >
          <span class="button-icon">🚀</span>
          <span>View My First Website</span>
          <span class="button-arrow">→</span>
        </a>
        <p class="deploy-footnote">
          Warning: You're about to witness the humble beginnings. Prepare for
          nostalgia! 🎨
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="contact-section">
      <h2 class="section-title font-micro5-regular">
        <span class="title-bracket">[</span> Let's Connect
        <span class="title-bracket">]</span>
      </h2>
      <p class="contact-intro">
        Have a project in mind or just want to chat about tech? Drop me a
        message and let's build something amazing together!
      </p>

      <!-- Social Links -->
      <div class="social-links">
        <a
          href="https://github.com/IwuchukwuDivine"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          title="GitHub"
        >
          <lucide-github :size="20" />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/divine-iwuchukwu-155089195"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          title="LinkedIn"
        >
          <lucide-linkedin :size="20" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://twitter.com/_DeeVyn"
          target="_blank"
          rel="noopener noreferrer"
          class="social-link"
          title="Twitter"
        >
          <lucide-twitter :size="20" />
          <span>Twitter</span>
        </a>
        <a
          href="mailto:ekeneifunanya@gmail.com"
          class="social-link"
          title="Email"
        >
          <lucide-mail :size="20" />
          <span>Email</span>
        </a>
      </div>
      <form @submit.prevent="handleSubmit" class="contact-form">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label font-micro5-regular">Name</label>
            <input
              v-model="form.name"
              type="text"
              class="form-input"
              placeholder="Your Name"
              required
            />
          </div>
          <div class="form-group">
            <label class="form-label font-micro5-regular">Email</label>
            <input
              v-model="form.email"
              type="email"
              class="form-input"
              placeholder="your.email@example.com"
              required
            />
          </div>
        </div>
        <div class="form-group">
          <label class="form-label font-micro5-regular">Subject</label>
          <input
            v-model="form.subject"
            type="text"
            class="form-input"
            placeholder="What's this about?"
            required
          />
        </div>
        <div class="form-group">
          <label class="form-label font-micro5-regular">Message</label>
          <textarea
            v-model="form.message"
            class="form-textarea"
            placeholder="Tell me about your project or just say hi..."
            rows="6"
            required
          ></textarea>
        </div>
        <button type="submit" class="submit-button font-micro5-regular">
          <span>Send Message</span>
          <span class="button-arrow">→</span>
        </button>
      </form>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-text">
          <p class="footer-name font-micro5-regular">Iwuchukwu Divine</p>
          <p class="footer-tagline">
            Building the future, one line of code at a time
          </p>
        </div>
        <div class="footer-links">
          <a
            href="https://github.com/IwuchukwuDivine"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <lucide-github :size="20" />
          </a>
          <a
            href="https://www.linkedin.com/in/divine-iwuchukwu-155089195"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <lucide-linkedin :size="20" />
          </a>
          <a
            href="https://twitter.com/_DeeVyn"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <lucide-twitter :size="20" />
          </a>
          <a href="mailto:ekeneifunanya@gmail.com" title="Email">
            <lucide-mail :size="20" />
          </a>
        </div>
        <div class="footer-copyright">
          <p>
            © {{ new Date().getFullYear() }} Iwuchukwu Divine. All rights
            reserved.
          </p>
          <p class="footer-quote">
            "Building fast, thinking faster, solving problems that slow others
            down."
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const typedText = ref("");
const fullText = "Software Engineer";
let typeIndex = 0;

onMounted(() => {
  const typeInterval = setInterval(() => {
    if (typeIndex < fullText.length) {
      typedText.value += fullText[typeIndex];
      typeIndex++;
    } else {
      clearInterval(typeInterval);
    }
  }, 80);
});

const handleSubmit = () => {
  // Handle form submission (could integrate with email service)
  form.value = { name: "", email: "", subject: "", message: "" };
};
</script>

<style scoped>
.home-container {
  width: 100%;
  position: relative;
  background: var(--color-background-color);
}

/* Hero Section */
.hero-section {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
}

.glitch-wrapper {
  margin-bottom: 1rem;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 5rem);
  color: var(--color-primary-color);
  margin: 0;
  position: relative;
  text-shadow: 0 0 20px var(--color-primary-color);
}

.glitch {
  position: relative;
  animation: glitch 3s infinite;
}

@keyframes glitch {
  0%,
  90%,
  100% {
    transform: translate(0);
  }
  92% {
    transform: translate(-2px, 2px);
  }
  94% {
    transform: translate(2px, -2px);
  }
  96% {
    transform: translate(-2px, -2px);
  }
  98% {
    transform: translate(2px, 2px);
  }
}

.hero-subtitle {
  font-size: clamp(1.2rem, 3vw, 1.8rem);
  color: var(--color-text-color);
  margin-bottom: 1.5rem;
  min-height: 2rem;
}

.cursor {
  animation: blink 1s infinite;
  color: var(--color-primary-color);
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}

.hero-description {
  max-width: 700px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 3rem;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--color-primary-color);
  font-family: var(--font-micro5-regular);
  text-shadow: 0 0 15px var(--color-primary-color);
}

.stat-label {
  font-size: 0.9rem;
  color: var(--color-text-color);
  opacity: 0.8;
  margin-top: 0.5rem;
}

/* Section Styling */
section {
  padding: 4rem 2rem;
  position: relative;
  z-index: 2;
  background: var(--color-background-color);
}

.section-title {
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text-color);
}

.title-bracket {
  color: var(--color-primary-color);
  font-size: 1.2em;
  text-shadow: 0 0 10px var(--color-primary-color);
}

/* Expertise Grid */
.expertise-section {
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.expertise-card {
  background: rgba(var(--color-primary-color-rgb), 0.05);
  border: 2px dashed var(--color-primary-color);
  padding: 2rem;
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.expertise-card::before {
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
  transition: left 0.5s ease;
}

.expertise-card:hover::before {
  left: 100%;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 30px rgba(var(--color-primary-color-rgb), 0.3);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.card-title {
  font-family: var(--font-micro5-regular);
  font-size: 1.3rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
}

.card-desc {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--color-text-color);
  opacity: 0.85;
}

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
  font-size: 1.3rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
}

.collab-desc {
  font-size: 0.95rem;
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

/* Skills Section */
.skills-section {
  max-width: 100%;
  margin: 0 auto;
}

/* Education Section */
.education-section {
  max-width: 1200px;
  margin: 0 auto;
}

/* First Deploy Section */
.first-deploy-section {
  max-width: 900px;
  margin: 0 auto;
  background: rgba(var(--color-primary-color-rgb), 0.03);
  border-radius: 15px;
  padding: 4rem 3rem;
  position: relative;
  overflow: hidden;
}

.first-deploy-section::before {
  content: "";
  position: absolute;
  top: -50%;
  right: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(
    circle,
    rgba(var(--color-primary-color-rgb), 0.1) 0%,
    transparent 70%
  );
  animation: pulse 8s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

.first-deploy-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.deploy-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(var(--color-primary-color-rgb), 0.15);
  border: 2px solid var(--color-primary-color);
  padding: 0.6rem 1.5rem;
  border-radius: 25px;
  margin-bottom: 2rem;
  font-family: var(--font-micro5-regular);
  color: var(--color-primary-color);
  font-size: 0.95rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-icon {
  font-size: 1.2rem;
}

.deploy-intro {
  font-size: 1.15rem;
  line-height: 1.8;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 2.5rem;
  text-align: center;
}

.deploy-intro strong {
  color: var(--color-primary-color);
  font-weight: 600;
}

.deploy-highlight {
  background: rgba(0, 0, 0, 0.3);
  border: 2px solid var(--color-primary-color);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  text-align: left;
  transition: all 0.3s ease;
}

.deploy-highlight:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(var(--color-primary-color-rgb), 0.3);
}

.highlight-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
  filter: drop-shadow(0 0 10px var(--color-primary-color));
}

.highlight-content {
  flex: 1;
}

.highlight-title {
  font-family: var(--font-micro5-regular);
  font-size: 1.4rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.highlight-text {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text-color);
  opacity: 0.9;
  margin: 0;
}

.deploy-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 2.5rem;
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  border-radius: 10px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  font-family: var(--font-micro5-regular);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.deploy-button:hover {
  background: transparent;
  color: var(--color-primary-color);
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 10px 40px rgba(var(--color-primary-color-rgb), 0.5);
}

.button-icon {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.deploy-button:hover .button-icon {
  transform: rotate(15deg) scale(1.2);
}

.button-arrow {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.deploy-button:hover .button-arrow {
  transform: translateX(8px);
}

.deploy-footnote {
  font-size: 0.9rem;
  color: var(--color-text-color);
  opacity: 0.7;
  font-style: italic;
  margin: 0;
  text-align: center;
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-block {
  background: transparent;
  border: 2px dashed var(--color-primary-color);
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
}

.education-block:hover {
  border-style: solid;
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.3);
  transform: translateX(10px);
}

.edu-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.edu-content {
  flex: 1;
}

.edu-degree {
  font-family: var(--font-micro5-regular);
  font-size: 1.3rem;
  color: var(--color-primary-color);
  margin-bottom: 0.5rem;
}

.edu-field {
  font-size: 1rem;
  color: var(--color-text-color);
  margin-bottom: 0.5rem;
}

.edu-year {
  font-size: 0.9rem;
  color: var(--color-text-color);
  opacity: 0.7;
}

.edu-location {
  font-size: 0.9rem;
  color: var(--color-text-color);
  opacity: 0.7;
  font-style: italic;
}

/* Contact Section */
.contact-section {
  background: var(--color-background-color);
  max-width: 800px;
  margin: 0 auto;
}

/* Social Links */
.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: 2px solid var(--color-primary-color);
  color: var(--color-text-color);
  text-decoration: none;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.social-link:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.4);
}

.contact-intro {
  text-align: center;
  font-size: 1.1rem;
  color: var(--color-text-color);
  opacity: 0.9;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-label {
  color: var(--color-primary-color);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.form-input,
.form-textarea {
  background: transparent;
  border: 2px solid rgba(255, 255, 255, 0.3);
  color: var(--color-text-color);
  padding: 1rem;
  border-radius: 5px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary-color);
  box-shadow: 0 0 15px rgba(var(--color-primary-color-rgb), 0.3);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.submit-button {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-button:hover {
  background: transparent;
  color: var(--color-primary-color);
  box-shadow: 0 0 30px rgba(var(--color-primary-color-rgb), 0.5);
  transform: translateY(-2px);
}

.button-arrow {
  transition: transform 0.3s ease;
}

.submit-button:hover .button-arrow {
  transform: translateX(5px);
}

/* Mobile Responsiveness */
@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  section {
    padding: 3rem 1rem;
  }

  .expertise-grid,
  .education-grid {
    grid-template-columns: 1fr;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .education-block:hover {
    transform: translateX(5px);
  }

  .opensource-section {
    padding: 3rem 1.5rem;
  }

  .collaboration-cards {
    grid-template-columns: 1fr;
  }

  .project-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .project-link {
    width: 100%;
    justify-content: center;
  }

  .contribution-cta {
    flex-direction: column;
    gap: 1rem;
  }

  .social-links {
    gap: 1rem;
  }

  .social-link {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }

  .first-deploy-section {
    padding: 3rem 1.5rem;
  }

  .deploy-intro {
    font-size: 1rem;
  }

  .deploy-highlight {
    flex-direction: column;
    padding: 1.5rem;
    text-align: center;
  }

  .highlight-icon {
    font-size: 2rem;
  }

  .highlight-title {
    font-size: 1.2rem;
  }

  .highlight-text {
    font-size: 0.95rem;
  }

  .deploy-button {
    width: 100%;
    justify-content: center;
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }

  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .footer-links {
    justify-content: center;
  }
}

/* Footer */
.footer {
  background: rgba(0, 0, 0, 0.3);
  border-top: 2px solid var(--color-primary-color);
  padding: 3rem 2rem 2rem;
  margin-top: 4rem;
  position: relative;
  z-index: 2;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  flex-wrap: wrap;
}

.footer-text {
  flex: 1;
  min-width: 250px;
}

.footer-name {
  font-size: 1.5rem;
  color: var(--color-primary-color);
  margin-bottom: 0.5rem;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.footer-tagline {
  font-size: 0.95rem;
  color: var(--color-text-color);
  opacity: 0.8;
  margin: 0;
}

.footer-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.footer-links a {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--color-primary-color);
  border-radius: 50%;
  color: var(--color-text-color);
  transition: all 0.3s ease;
  background: transparent;
}

.footer-links a:hover {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  transform: translateY(-3px) rotate(5deg);
  box-shadow: 0 5px 20px rgba(var(--color-primary-color-rgb), 0.4);
}

.footer-copyright {
  flex: 1;
  min-width: 250px;
  text-align: right;
}

.footer-copyright p {
  font-size: 0.9rem;
  color: var(--color-text-color);
  opacity: 0.7;
  margin: 0.25rem 0;
}

.footer-quote {
  font-style: italic;
  font-size: 0.85rem !important;
  color: var(--color-primary-color) !important;
  opacity: 0.9 !important;
  margin-top: 0.5rem !important;
}
</style>
