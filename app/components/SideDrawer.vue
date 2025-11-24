<template>
  <div class="side-drawer-container">
    <Transition name="slide-fade">
      <div v-show="isOpen" class="side-drawer">
        <div class="drawer-content">
          <!-- Header -->
          <div class="drawer-header">
            <div class="avatar-circle">
              <span class="avatar-text font-micro5-regular">ID</span>
            </div>
            <h3 class="drawer-name font-micro5-regular">Iwuchukwu Divine</h3>
            <p class="drawer-role font-chewy-regular">Software Engineer</p>
            <div class="status-indicator">
              <span class="status-dot"></span>
              <span class="status-text">Available for work</span>
            </div>
          </div>

          <!-- Divider -->
          <div class="drawer-divider">
            <span class="divider-bracket">[</span>
            <span class="divider-line"></span>
            <span class="divider-bracket">]</span>
          </div>

          <!-- Navigation Links -->
          <nav class="drawer-nav">
            <nuxt-link class="nav-item" to="/">
              <lucide-home :size="20" />
              <span>Home</span>
              <lucide-chevron-right :size="16" class="nav-arrow" />
            </nuxt-link>
            <nuxt-link class="nav-item" to="/projects">
              <lucide-briefcase :size="20" />
              <span>Projects</span>
              <lucide-chevron-right :size="16" class="nav-arrow" />
            </nuxt-link>
            <nuxt-link class="nav-item" to="/about">
              <lucide-user :size="20" />
              <span>About</span>
              <lucide-chevron-right :size="16" class="nav-arrow" />
            </nuxt-link>
            <nuxt-link class="nav-item" to="/hobbies">
              <lucide-heart :size="20" />
              <span>Hobbies</span>
              <lucide-chevron-right :size="16" class="nav-arrow" />
            </nuxt-link>
          </nav>

          <!-- Footer -->
          <div class="drawer-footer">
            <p class="footer-quote font-chewy-regular">
              "Building fast, thinking faster"
            </p>
            <div class="footer-year font-micro5-regular">
              © {{ new Date().getFullYear() }}
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    isOpen: boolean;
  }>(),
  {
    isOpen: false,
  }
);
</script>

<style scoped>
.side-drawer-container {
  width: 18vw;
  height: 100vh;
  position: fixed;
  top: 140px;
  left: 10px;
  z-index: 100;
  overflow: hidden;
}

/* Hide side drawer on mobile - only show on desktop */
@media (max-width: 768px) {
  .side-drawer-container {
    display: none;
  }
}

.side-drawer {
  border-right: 2px solid var(--color-primary-color);
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background: linear-gradient(
    to bottom,
    rgba(var(--color-primary-color-rgb), 0.02),
    transparent 50%,
    rgba(var(--color-primary-color-rgb), 0.02)
  );
}

.drawer-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.5rem 1rem;
}

/* Header */
.drawer-header {
  text-align: center;
  margin-bottom: 2rem;
}

.avatar-circle {
  width: 80px;
  height: 80px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  border: 3px solid var(--color-primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(var(--color-primary-color-rgb), 0.1);
  box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.3);
  animation: pulse-glow 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

.avatar-circle::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(
    from 0deg,
    transparent,
    var(--color-primary-color),
    transparent 30%
  );
  animation: rotate 4s linear infinite;
}

.avatar-circle::after {
  content: "";
  position: absolute;
  inset: 3px;
  background: var(--color-background-color);
  border-radius: 50%;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pulse-glow {
  0%,
  100% {
    box-shadow: 0 0 20px rgba(var(--color-primary-color-rgb), 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(var(--color-primary-color-rgb), 0.6);
  }
}

.avatar-text {
  font-size: 1.8rem;
  color: var(--color-primary-color);
  font-weight: bold;
  z-index: 1;
  position: relative;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.drawer-name {
  font-size: 1.4rem;
  color: var(--color-primary-color);
  margin-bottom: 0.3rem;
  line-height: 1.3;
  text-shadow: 0 0 10px rgba(var(--color-primary-color-rgb), 0.5);
}

.drawer-role {
  font-size: 0.85rem;
  color: var(--color-text-color);
  opacity: 0.8;
}

.status-indicator {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.8rem;
  padding: 0.4rem 0.8rem;
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border-radius: 20px;
  border: 1px solid var(--color-primary-color);
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--color-primary-color);
  animation: blink 2s ease-in-out infinite;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.status-text {
  font-size: 0.75rem;
  color: var(--color-text-color);
}

/* Divider */
.drawer-divider {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0;
}

.divider-bracket {
  color: var(--color-primary-color);
  font-family: var(--font-micro5-regular);
  font-size: 1.2rem;
  text-shadow: 0 0 10px var(--color-primary-color);
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    var(--color-primary-color),
    transparent
  );
}

/* Navigation */
.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  flex: 1;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  color: var(--color-text-color);
  text-decoration: none;
  border-radius: 8px;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  font-size: 0.95rem;
}

.nav-item::before {
  content: "";
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(var(--color-primary-color-rgb), 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.nav-item:hover::before {
  left: 100%;
}

.nav-item:hover {
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border-color: var(--color-primary-color);
  transform: translateX(8px);
  color: var(--color-primary-color);
}

.nav-item.router-link-active {
  background: rgba(var(--color-primary-color-rgb), 0.15);
  border-color: var(--color-primary-color);
  color: var(--color-primary-color);
  box-shadow: 0 0 15px rgba(var(--color-primary-color-rgb), 0.3);
}

.nav-arrow {
  margin-left: auto;
  opacity: 0;
  transform: translateX(-5px);
  transition: all 0.3s ease;
}

.nav-item:hover .nav-arrow,
.nav-item.router-link-active .nav-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Footer */
.drawer-footer {
  margin-top: auto;
  padding-top: 1.5rem;
  border-top: 1px dashed var(--color-primary-color);
  text-align: center;
}

.footer-quote {
  font-size: 0.75rem;
  font-style: italic;
  color: var(--color-text-color);
  opacity: 0.7;
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.footer-year {
  font-size: 0.7rem;
  color: var(--color-primary-color);
  opacity: 0.6;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}

/* Scrollbar */
.side-drawer::-webkit-scrollbar {
  width: 4px;
}

.side-drawer::-webkit-scrollbar-track {
  background: transparent;
}

.side-drawer::-webkit-scrollbar-thumb {
  background: var(--color-primary-color);
  border-radius: 2px;
}

.side-drawer::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-color);
}
</style>
