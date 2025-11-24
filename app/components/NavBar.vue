<template>
  <div class="">
    <!-- Desktop Navigation -->
    <div class="nav-main hidden md:flex">
      <div class="nav-link">
        <lucide-panel-left @click="emit('toggle-side-drawer')" />
      </div>
      <nuxt-link to="/" class="nav-link">
        <lucide-home />
        <span>Home</span>
      </nuxt-link>
      <nuxt-link to="/projects" class="nav-link">
        <lucide-briefcase />
        <span>Projects</span>
      </nuxt-link>
      <nuxt-link to="/about" class="nav-link">
        <lucide-user />
        <span>About</span>
      </nuxt-link>
      <nuxt-link to="/hobbies" class="nav-link">
        <lucide-heart />
        <span>Hobbies</span>
      </nuxt-link>
      <div class="nav-link theme-selector">
        <div
          @click="showThemeSelector = !showThemeSelector"
          class="w-6 h-6 rounded-full border-4 border-text-color cursor-pointer"
          :style="{ backgroundColor: currentTheme?.color }"
        ></div>
        <Transition name="fade">
          <div v-show="showThemeSelector" class="theme-dropdown">
            <div
              v-for="theme in themes"
              :key="theme.name"
              class="w-5 h-5 rounded-full cursor-pointer"
              :style="{ backgroundColor: theme.color }"
              @click="handleThemeSelector(theme)"
            ></div>
          </div>
        </Transition>
      </div>
    </div>

    <!-- Mobile Navigation -->
    <div class="nav-mobile md:hidden">
      <div class="mobile-header">
        <h2 class="text-2xl font-micro5-regular font-bold text-primary-color">
          Divine
        </h2>
        <div class="flex items-center gap-4">
          <!-- Theme selector for mobile -->
          <div class="theme-selector-mobile">
            <div
              @click="showThemeSelector = !showThemeSelector"
              class="w-6 h-6 rounded-full border-2 border-text-color cursor-pointer"
              :style="{ backgroundColor: currentTheme?.color }"
            ></div>
            <Transition name="fade">
              <div v-show="showThemeSelector" class="theme-dropdown-mobile">
                <div
                  v-for="theme in themes"
                  :key="theme.name"
                  class="w-5 h-5 rounded-full cursor-pointer"
                  :style="{ backgroundColor: theme.color }"
                  @click="handleThemeSelector(theme)"
                ></div>
              </div>
            </Transition>
          </div>
          <!-- Hamburger Menu -->
          <button @click="emit('toggle-mobile-menu')" class="hamburger-btn">
            <lucide-menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <lucide-x v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Slide-in Menu -->
    <Transition name="slide-in">
      <div v-show="isMobileMenuOpen" class="mobile-menu md:hidden">
        <div class="mobile-menu-content">
          <nuxt-link
            to="/"
            class="mobile-menu-link"
            @click="emit('toggle-mobile-menu')"
          >
            <lucide-home class="w-6 h-6" />
            <span>Home</span>
          </nuxt-link>
          <nuxt-link
            to="/about"
            class="mobile-menu-link"
            @click="emit('toggle-mobile-menu')"
          >
            <lucide-user class="w-6 h-6" />
            <span>About</span>
          </nuxt-link>
          <nuxt-link
            to="/projects"
            class="mobile-menu-link"
            @click="emit('toggle-mobile-menu')"
          >
            <lucide-briefcase class="w-6 h-6" />
            <span>Projects</span>
          </nuxt-link>
          <nuxt-link
            to="/hobbies"
            class="mobile-menu-link"
            @click="emit('toggle-mobile-menu')"
          >
            <lucide-heart class="w-6 h-6" />
            <span>Hobbies</span>
          </nuxt-link>
        </div>
      </div>
    </Transition>

    <!-- Mobile Menu Overlay -->
    <Transition name="fade">
      <div
        v-show="isMobileMenuOpen"
        class="mobile-menu-overlay md:hidden"
        @click="emit('toggle-mobile-menu')"
      ></div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  isMobileMenuOpen?: boolean;
}>();

const currentTheme = ref(themes[0]);
const emit = defineEmits<{
  (e: "toggle-side-drawer"): void;
  (e: "toggle-mobile-menu"): void;
}>();
const showThemeSelector = ref(false);
const handleThemeSelector = (theme: (typeof themes)[number]) => {
  switchTheme(theme.name);
  currentTheme.value = theme;
  showThemeSelector.value = false;
};
</script>
<style scoped>
/* Desktop Navigation */
.nav-main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 5rem;
  gap: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    to bottom,
    var(--color-background-color) 0%,
    var(--color-background-color) 60%,
    transparent 100%
  );
  z-index: 1000;
  transition: transform 0.3s ease-in-out;
}
.nav-link {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease-in-out;
  position: relative;
  cursor: pointer;
}
.nav-link:hover {
  color: var(--color-primary-color);
  transform: scale(1.1);
}
.nav-link span {
  position: absolute;
  top: 100%;
  margin-top: 0.5rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;
  white-space: nowrap;
}
.nav-link:hover span {
  opacity: 1;
  visibility: visible;
}

.theme-selector {
  position: relative;
}

.theme-dropdown {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.5rem;
  background-color: white;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0.5rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  z-index: 10;
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-background-color);
  z-index: 1000;
  padding: 1rem 1.5rem;
  border-bottom: 2px solid var(--color-primary-color);
}

.mobile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.hamburger-btn {
  background: none;
  border: none;
  color: var(--color-text-color);
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  color: var(--color-primary-color);
  transform: scale(1.1);
}

.theme-selector-mobile {
  position: relative;
}

.theme-dropdown-mobile {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  border-radius: 0.5rem;
  padding: 0.75rem;
  z-index: 10;
}

/* Mobile Slide-in Menu */
.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 75%;
  max-width: 320px;
  background: var(--color-background-color);
  z-index: 2000;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.3);
  border-left: 2px solid var(--color-primary-color);
}

.mobile-menu-content {
  padding: 5rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.mobile-menu-link {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
  border-radius: 0.75rem;
  color: var(--color-text-color);
  font-size: 1.25rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.mobile-menu-link:hover,
.mobile-menu-link.router-link-active {
  color: var(--color-primary-color);
  background: rgba(var(--color-primary-color-rgb), 0.1);
  border-color: var(--color-primary-color);
  transform: translateX(10px);
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1500;
  backdrop-filter: blur(2px);
}

/* Animations */
.slide-in-enter-active,
.slide-in-leave-active {
  transition: transform 0.3s ease-in-out;
}

.slide-in-enter-from,
.slide-in-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
