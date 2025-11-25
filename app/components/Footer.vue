<template>
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
    <fire-flies :spawn-rate="20" />
  </footer>
</template>

<script setup lang="ts"></script>
<style scoped>
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
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .footer-links {
    justify-content: center;
  }
}
</style>
