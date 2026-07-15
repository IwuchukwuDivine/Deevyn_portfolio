<template>
  <Analytics />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
import { Analytics } from "@vercel/analytics/nuxt";

const { currentTheme } = useTheme();
useHead({
  bodyAttrs: {
    class: computed(() => currentTheme.value?.name || "theme-default"),
  },
});
</script>
