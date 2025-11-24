<template>
  <div class="projects-container">
    <!-- Header Section -->
    <section class="projects-header">
      <h1 class="projects-title font-micro5-regular">
        <span class="title-bracket">[</span> Featured Projects
        <span class="title-bracket">]</span>
      </h1>
      <p class="projects-subtitle">
        Personal projects crafted with passion. Most professional work remains
        under NDA, but here's what I can share from my creative journey.
      </p>
    </section>

    <!-- Projects Grid Section -->
    <section class="projects-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card"
      >
        <div class="card-content">
          <div class="card-header">
            <div class="project-icon">{{ project.icon }}</div>
            <div v-if="project.personal" class="project-status">
              Personal Project
            </div>
          </div>

          <h3 class="project-name font-micro5-regular">{{ project.name }}</h3>
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
interface Project {
  id: string;
  name: string;
  icon: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  personal?: boolean;
}

onMounted(() => {
  const cards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("card-visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => observer.observe(card));
});

const projects: Project[] = [
  {
    id: "html-vue-converter",
    name: "HTML to Vue Converter",
    icon: "🔄",
    description:
      "A powerful web-based tool that instantly converts vanilla HTML into Vue 3 Single File Components. Supports both Composition API and Options API with intelligent parsing of scripts, styles, and templates.",
    tech: ["Vue 3", "Nuxt 3", "TypeScript", "Vitest"],
    link: "https://html-vue-converter.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/html_vue_converter",
    personal: true,
  },
  {
    id: "essenceials",
    name: "Essenceials",
    icon: "🛍️",
    description:
      "An online shopping platform for premium home appliances, perfumes, electronics, and lifestyle essentials with a smooth, secure checkout experience.",
    tech: ["React", "Node.js", "Stripe", "MongoDB"],
    link: "https://essenceials.com/",
    personal: false,
  },
  {
    id: "umoja-africa",
    name: "Umoja Africa",
    icon: "🔗",
    description:
      "A Pan-African platform focused on unity, collaboration, and empowerment. Connecting communities across the continent.",
    tech: ["Vue.js", "Nuxt", "Supabase", "Tailwind CSS"],
    link: "https://umoja-africa.com/",
    personal: false,
  },
  {
    id: "flickfusion",
    name: "FlickFusion",
    icon: "🎥",
    description:
      "A movie discovery app powered by the TMDB API with a clean, responsive UI. Search, explore, and discover your next favorite film.",
    tech: ["React", "TMDB API", "CSS3", "Axios"],
    link: "https://flickfusion.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/flick-fusion",
    personal: true,
  },
  {
    id: "buds-sensation",
    name: "Buds Sensation",
    icon: "🍽️",
    description:
      "A modern restaurant landing page that highlights the menu, specials, reservations, and gallery. Designed for an exceptional dining experience.",
    tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    link: "https://buds-sensation.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/restaurant-website",
    personal: true,
  },
  {
    id: "nft-gallery",
    name: "NFT Gallery",
    icon: "🖼️",
    description:
      "A modern landing page for showcasing digital NFTs with stunning visuals and smooth animations.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    link: "https://nft-website-chi-seven.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/NFT-website",
    personal: true,
  },
  {
    id: "tic-tac-toe",
    name: "Tic Tac Toe Game",
    icon: "🎮",
    description:
      "A fun, interactive, and responsive game built for browsers. Classic gameplay with modern design.",
    tech: ["JavaScript", "CSS3", "HTML5"],
    link: "https://tic-tac-toe-game-six-kappa.vercel.app/",
    personal: true,
  },
  {
    id: "solux-solana",
    name: "Solux Solana",
    icon: "🪙",
    description:
      "A dark-themed Solana blockchain landing page with smooth animations and modern Web3 aesthetics.",
    tech: ["React", "Framer Motion", "Web3", "CSS3"],
    link: "https://soluxsolana.netlify.app/",
    personal: false,
  },
  {
    id: "expense-tracker",
    name: "Expense Tracker",
    icon: "💰",
    description:
      "A tool for managing and tracking daily expenses with intuitive charts and budget management features.",
    tech: ["Vue.js", "Chart.js", "LocalStorage"],
    link: "https://expense-tracker-xi-gray.vercel.app/",
    github: "https://github.com/IwuchukwuDivine/Expense-Tracker",
    personal: true,
  },
];
</script>

<style scoped>
.projects-container {
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow-x: hidden;
  margin-top: 60px;
  background: var(--color-background-color);
}

/* Header Section */
.projects-header {
  text-align: center;
  padding: 3rem 2rem;
  /* margin-bottom: 4rem; */
}

.projects-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--color-text-color);
  margin-bottom: 1.5rem;
}

.title-bracket {
  color: var(--color-primary-color);
  font-size: 1.2em;
  text-shadow: 0 0 10px var(--color-primary-color);
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
  grid-template-columns: repeat(auto-fit, 1fr);
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
  padding: 2.5rem;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.card-content::before {
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

.project-card:hover .card-content::before {
  left: 100%;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
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

  .card-content {
    padding: 1.5rem;
  }

  .project-name {
    font-size: 1.5rem;
  }

  .project-description {
    font-size: 0.95rem;
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
/* --- Scroll Animation Base --- */
.project-card {
  opacity: 0;
  transform: translateY(40px) scale(0.95);
  transition: all 0.9s cubic-bezier(0.22, 1, 0.36, 1);
  will-change: transform, opacity;
}

/* --- When in viewport --- */
.card-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* --- Extra neon glow — space vibes --- */
.project-card.card-visible .card-content {
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.2),
    0 0 40px rgba(var(--color-primary-color-rgb), 0.1);
  transition: box-shadow 0.8s ease;
}

/* Neon border pulse on entrance */
.project-card.card-visible .card-content::before {
  animation: borderSweep 1.6s ease forwards;
}

@keyframes borderSweep {
  0% {
    left: -120%;
  }
  60% {
    left: 120%;
  }
  100% {
    left: 200%;
  }
}

/* Parallax scroll effect: subtle tilt */
.project-card.card-visible:hover {
  transform: translateY(-10px) scale(1.02) rotate3d(1, 1, 0, 6deg);
  transition: transform 0.45s ease;
}
</style>
