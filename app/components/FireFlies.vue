<template>
  <div ref="firefliesContainer" class="fireflies-container">
    <!-- -->
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    spawnRate: number;
  }>(),
  {
    spawnRate: 20,
  }
);

const firefliesContainer = ref<HTMLDivElement | null>(null);
const interval = ref<ReturnType<typeof setInterval> | null>(null);

onMounted(() => {
  if (!firefliesContainer.value) return;
  interval.value = setInterval(() => {
    const firefly = document.createElement("div");
    firefly.className = "firefly";

    // Random horizontal position
    firefly.style.left = `${Math.random() * 100}%`;
    firefly.style.bottom = `0`;

    // Random animation duration & delay
    const duration = 5 + Math.random() * 5;
    firefly.style.animationDuration = `${duration}s`;

    firefliesContainer.value?.appendChild(firefly);

    // Remove firefly after animation ends
    setTimeout(() => {
      firefly.remove();
    }, duration * 1000);
  }, 1000 / props.spawnRate);
});

onUnmounted(() => {
  if (interval.value) {
    clearInterval(interval.value);
  }
});
</script>
<style>
.fireflies-container {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; /* stays behind everything */
  pointer-events: none; /* don't block interactions */
  overflow: hidden;
}

.firefly {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(
    circle,
    var(--color-text-color) 30%,
    transparent 70%
  );
  border-radius: 50%;
  opacity: 0;
  animation: flyUp linear forwards;
}

@keyframes flyUp {
  0% {
    transform: translateY(0) scale(0.6);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-50vh) scale(0.3);
    opacity: 0;
  }
}
</style>
