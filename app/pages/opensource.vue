<template>
  <div class="opensource-page">
    <OpenSource :is-full-page="true" :show-see-all="false" />
  </div>
</template>

<script setup lang="ts">
usePageSeo({
  title: "Open Source",
  description:
    "Open source projects by Iwuchukwu Divine — AI agents, civic tech, digital archives, and Vue tooling. MIT-licensed and open for contributions.",
  path: "/opensource",
});
</script>

<style scoped>
.opensource-page {
  width: 100%;
}
</style>
