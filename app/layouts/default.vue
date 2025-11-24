<template>
  <nav-bar
    @toggle-side-drawer="isSideDrawerOpen = !isSideDrawerOpen"
    @toggle-mobile-menu="isMobileMenuOpen = !isMobileMenuOpen"
    :is-mobile-menu-open="isMobileMenuOpen"
  />
  <div
    class="relative h-screen pb-3 mx-0 px-4 md:mx-[18vw] md:px-10 bg-background-color text-text-color"
  >
    <!-- Side drawer only shows on desktop -->
    <side-drawer :is-open="isSideDrawerOpen" class="hidden md:block" />
    <div class="w-full mx-auto bg-background-color text-text-color">
      <NuxtPage />
    </div>
    <fire-flies :spawn-rate="40" />
  </div>
</template>

<script setup lang="ts">
const isSideDrawerOpen = ref(false);
const isMobileMenuOpen = ref(false);
</script>

<style scoped></style>
