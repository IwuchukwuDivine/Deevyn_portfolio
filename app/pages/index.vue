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
      <h2 class="section-title">
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
        <div class="expertise-card">
          <div class="card-icon">⚙️</div>
          <h3 class="card-title">Backend Development & Automation</h3>
          <p class="card-desc">
            Node-RED for visual automation flows, Supabase with RLS policies,
            Python serverless backends with AWS Lambda, DynamoDB, CloudFront
            CDN, and AWS IoT MQTT for real-time device communication.
          </p>
        </div>
      </div>
    </section>

    <!-- Open Source & Collaboration -->
    <open-source />
    <!-- Skills Galaxy -->
    <section class="skills-section">
      <h2 class="section-title">
        <span class="title-bracket">[</span> Tech Universe
        <span class="title-bracket">]</span>
      </h2>
      <Skills />
    </section>

    <!-- Education Section -->
    <section class="education-section">
      <h2 class="section-title">
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
      <h2 class="section-title">
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
          pure HTML, CSS, and determination.
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
    <contact-me />
  </div>
</template>

<script setup lang="ts">
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
  font-size: 1.5rem;
  color: var(--color-primary-color);
  margin-bottom: 1rem;
}

.card-desc {
  font-size: 1.1rem;
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

  .expertise-grid,
  .education-grid {
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
}
</style>
