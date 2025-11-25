<template>
  <transition name="rocket-enter">
    <div class="rocket-container" v-if="isVisible" @click="launchRocket">
      <!-- Enhanced particle system -->
      <div class="particle-system">
        <div
          v-for="i in 12"
          :key="i"
          class="particle"
          :style="`--i: ${i}`"
        ></div>
      </div>

      <!-- Smoke trail -->
      <div class="smoke-container">
        <div
          v-for="i in 6"
          :key="i"
          class="smoke"
          :style="`--delay: ${i * 0.15}s`"
        ></div>
      </div>

      <div class="rocket-wrapper" :class="{ 'rocket-launched': isLaunched }">
        <!-- Enhanced 3D rocket structure -->
        <div class="rocket-3d">
          <!-- Nose cone with 3D effect -->
          <div class="nose-cone">
            <div class="nose-shine"></div>
          </div>

          <!-- Main body with panels -->
          <div class="rocket-body-3d">
            <div class="body-panel panel-front"></div>
            <div class="body-panel panel-left"></div>
            <div class="body-panel panel-right"></div>
            <div class="body-highlight"></div>

            <!-- Windows with reflection -->
            <div class="window-container">
              <div class="window main-window">
                <div class="window-reflection"></div>
                <div class="window-glare"></div>
              </div>
              <div class="window side-window-1"></div>
              <div class="window side-window-2"></div>
            </div>

            <!-- Body stripes -->
            <div class="body-stripe stripe-1"></div>
            <div class="body-stripe stripe-2"></div>
          </div>

          <!-- Enhanced fire with 3D particles -->
          <div class="fire-container-3d">
            <div class="fire-core"></div>
            <div
              v-for="i in 8"
              :key="i"
              class="fire-particle"
              :style="`--i: ${i}`"
            ></div>
            <div class="fire-glow"></div>
            <div class="exhaust-ring"></div>
          </div>
        </div>

        <!-- Multiple glow layers -->
        <div class="glow-layer glow-inner"></div>
        <div class="glow-layer glow-mid"></div>
        <div class="glow-layer glow-outer"></div>
      </div>

      <!-- Enhanced stars with depth -->
      <div class="stars-3d">
        <div
          v-for="i in 15"
          :key="i"
          class="star-3d"
          :style="`--i: ${i}`"
        ></div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
const isVisible = ref(false);
const isLaunched = ref(false);

const handleScroll = () => {
  const { scrollY, innerHeight } = window;
  const docHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight;

  const threshold = 0.65;
  const scrollProgress = (scrollY + innerHeight) / docHeight;
  if (docHeight <= innerHeight) {
    isVisible.value = false;
    return;
  }
  isVisible.value = scrollProgress >= threshold;
};

const launchRocket = () => {
  if (isLaunched.value) return;

  isLaunched.value = true;

  // Smooth scroll to top with custom timing
  const scrollToTop = () => {
    const currentScroll = window.scrollY;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const newScroll = currentScroll * (1 - easeOutCubic);

      window.scrollTo(0, newScroll);

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      } else {
        // Reset rocket after animation completes
        setTimeout(() => {
          isLaunched.value = false;
        }, 500);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  scrollToTop();
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.rocket-container {
  position: fixed;
  bottom: 100px;
  right: 40px;
  z-index: 1000;
  cursor: pointer;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.rocket-container:hover {
  transform: scale(1.15) translateZ(20px);
}

.rocket-container:hover .rocket-wrapper {
  transform: rotateY(15deg) rotateX(-5deg);
}

.rocket-wrapper {
  position: relative;
  z-index: 10;
  transform-style: preserve-3d;
  transition: all 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

/* 3D Rocket Structure */
.rocket-3d {
  width: 100px;
  height: 160px;
  position: relative;
  transform-style: preserve-3d;
  animation: rocketFloat 3s ease-in-out infinite;
}

@keyframes rocketFloat {
  0%,
  100% {
    transform: translateY(0) rotateZ(0deg);
  }
  50% {
    transform: translateY(-10px) rotateZ(2deg);
  }
}

/* Nose Cone */
.nose-cone {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-bottom: 60px solid var(--color-primary-color);
  filter: drop-shadow(0 0 25px rgba(255, 107, 107, 0.8));
  animation: nosePulse 2s ease-in-out infinite;
}

@keyframes nosePulse {
  0%,
  100% {
    filter: drop-shadow(0 0 25px rgba(255, 107, 107, 0.8)) brightness(1);
  }
  50% {
    filter: drop-shadow(0 0 40px rgba(255, 107, 107, 1)) brightness(1.2);
  }
}

.nose-shine {
  position: absolute;
  top: 10px;
  left: -15px;
  width: 8px;
  height: 20px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), transparent);
  border-radius: 50%;
  filter: blur(2px);
}

/* Main Body 3D */
.rocket-body-3d {
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 100px;
  background: linear-gradient(
    135deg,
    var(--color-primary-color) 0%,
    #ff3366 50%,
    #cc0044 100%
  );
  border-radius: 5px;
  transform-style: preserve-3d;
  box-shadow: 0 0 40px rgba(255, 107, 107, 0.6),
    inset -5px 0 15px rgba(0, 0, 0, 0.3),
    inset 5px 0 15px rgba(255, 255, 255, 0.1);
}

.body-panel {
  position: absolute;
  width: 100%;
  height: 100%;
}

.panel-front {
  transform: translateZ(15px);
  background: linear-gradient(
    135deg,
    rgba(255, 107, 107, 0.3),
    rgba(255, 107, 107, 0.1)
  );
}

.panel-left {
  transform: rotateY(-90deg) translateZ(15px);
  width: 30px;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2));
}

.panel-right {
  transform: rotateY(90deg) translateZ(45px);
  width: 30px;
  background: linear-gradient(
    to left,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.05)
  );
}

.body-highlight {
  position: absolute;
  top: 10px;
  left: 5px;
  width: 15px;
  height: 60px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.4), transparent);
  border-radius: 50%;
  filter: blur(3px);
}

/* Windows */
.window-container {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
}

.window {
  position: absolute;
  background: linear-gradient(135deg, #1a1a2e, #0f0f1e);
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.8),
    0 0 15px rgba(100, 200, 255, 0.5);
}

.main-window {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
}

.window-reflection {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.8), transparent);
  border-radius: 50%;
}

.window-glare {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 6px;
  height: 6px;
  background: rgba(100, 200, 255, 0.6);
  border-radius: 50%;
  animation: windowGlare 2s ease-in-out infinite;
}

@keyframes windowGlare {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 1;
  }
}

.side-window-1,
.side-window-2 {
  width: 12px;
  height: 12px;
  left: 50%;
  transform: translateX(-50%);
}

.side-window-1 {
  top: 50px;
}

.side-window-2 {
  top: 70px;
}

/* Body Stripes */
.body-stripe {
  position: absolute;
  width: 100%;
  height: 3px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 215, 0, 0.6),
    transparent
  );
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

.stripe-1 {
  top: 40%;
}

.stripe-2 {
  top: 60%;
}

/* Enhanced 3D Fire */
.fire-container-3d {
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  pointer-events: none;
  transform-style: preserve-3d;
}

.fire-core {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 35px;
  height: 50px;
  background: radial-gradient(
    ellipse at center bottom,
    #fff 0%,
    #ffeb3b 15%,
    #ff9800 30%,
    #ff5722 50%,
    #f44336 70%,
    transparent 100%
  );
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  filter: blur(2px);
  animation: fireCore 0.2s ease-in-out infinite alternate;
}

@keyframes fireCore {
  0% {
    transform: translateX(-50%) scaleY(1) scaleX(1);
    filter: blur(2px) brightness(1.2);
  }
  100% {
    transform: translateX(-50%) scaleY(1.15) scaleX(0.95);
    filter: blur(3px) brightness(1.4);
  }
}

.fire-particle {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 8px;
  height: 8px;
  background: radial-gradient(circle, #ffeb3b, #ff5722);
  border-radius: 50%;
  animation: fireParticleFloat 0.8s ease-out infinite;
  animation-delay: calc(var(--i) * 0.1s);
  transform: translateX(-50%) rotate(calc(var(--i) * 45deg)) translateY(0);
}

@keyframes fireParticleFloat {
  0% {
    opacity: 1;
    transform: translateX(-50%) rotate(calc(var(--i) * 45deg)) translateY(0)
      scale(1);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) rotate(calc(var(--i) * 45deg)) translateY(-60px)
      scale(0);
  }
}

.fire-glow {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  background: radial-gradient(
    circle,
    rgba(255, 235, 59, 0.6) 0%,
    rgba(255, 152, 0, 0.4) 30%,
    rgba(244, 67, 54, 0.2) 60%,
    transparent 100%
  );
  border-radius: 50%;
  filter: blur(10px);
  animation: fireGlowPulse 0.3s ease-in-out infinite;
}

@keyframes fireGlowPulse {
  0%,
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateX(-50%) scale(1.2);
    opacity: 1;
  }
}

.exhaust-ring {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 8px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 152, 0, 0.6),
    transparent
  );
  border-radius: 50%;
  filter: blur(3px);
  animation: exhaustPulse 0.4s ease-in-out infinite;
}

@keyframes exhaustPulse {
  0%,
  100% {
    transform: translateX(-50%) scaleX(1);
    opacity: 0.6;
  }
  50% {
    transform: translateX(-50%) scaleX(1.3);
    opacity: 1;
  }
}

/* Multiple Glow Layers */
.glow-layer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  pointer-events: none;
  z-index: -1;
}

.glow-inner {
  width: 160px;
  height: 220px;
  background: radial-gradient(
    ellipse,
    rgba(255, 107, 107, 0.4) 0%,
    rgba(255, 107, 107, 0.2) 50%,
    transparent 70%
  );
  animation: glowPulseInner 2s ease-in-out infinite;
  filter: blur(20px);
}

.glow-mid {
  width: 200px;
  height: 260px;
  background: radial-gradient(
    ellipse,
    rgba(255, 70, 70, 0.3) 0%,
    rgba(255, 107, 107, 0.1) 40%,
    transparent 70%
  );
  animation: glowPulseMid 2.5s ease-in-out infinite;
  filter: blur(30px);
}

.glow-outer {
  width: 240px;
  height: 300px;
  background: radial-gradient(
    ellipse,
    rgba(255, 50, 50, 0.2) 0%,
    rgba(255, 107, 107, 0.05) 30%,
    transparent 60%
  );
  animation: glowPulseOuter 3s ease-in-out infinite;
  filter: blur(40px);
}

@keyframes glowPulseInner {
  0%,
  100% {
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes glowPulseMid {
  0%,
  100% {
    opacity: 0.4;
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1.15) rotate(10deg);
  }
}

@keyframes glowPulseOuter {
  0%,
  100% {
    opacity: 0.3;
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
  }
  50% {
    opacity: 0.5;
    transform: translate(-50%, -50%) scale(1.2) rotate(-10deg);
  }
}

/* Enhanced Launch Animation */
.rocket-launched {
  animation: rocketLaunch3D 2.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
}

@keyframes rocketLaunch3D {
  0% {
    transform: translateY(0) translateZ(0) rotateX(0deg) rotateZ(0deg) scale(1);
    filter: brightness(1);
  }
  15% {
    transform: translateY(-30px) translateZ(20px) rotateX(-10deg) rotateZ(-8deg)
      scale(1.15);
    filter: brightness(1.3);
  }
  30% {
    transform: translateY(-80px) translateZ(40px) rotateX(-5deg) rotateZ(5deg)
      scale(1.25);
    filter: brightness(1.5);
  }
  50% {
    transform: translateY(-180px) translateZ(60px) rotateX(5deg) rotateZ(-3deg)
      scale(1.4);
    filter: brightness(1.7);
  }
  70% {
    transform: translateY(-320px) translateZ(80px) rotateX(-3deg) rotateZ(4deg)
      scale(1.5);
    filter: brightness(1.8);
  }
  85% {
    transform: translateY(-480px) translateZ(100px) rotateX(0deg) rotateZ(0deg)
      scale(1.3);
    filter: brightness(1.5);
  }
  100% {
    transform: translateY(-700px) translateZ(120px) rotateX(0deg) rotateZ(0deg)
      scale(0.5);
    opacity: 0;
    filter: brightness(2);
  }
}

/* Particle System */
.particle-system {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: radial-gradient(
    circle,
    var(--color-primary-color),
    rgba(255, 107, 107, 0.5)
  );
  border-radius: 50%;
  top: 50%;
  left: 50%;
  opacity: 0;
  box-shadow: 0 0 10px var(--color-primary-color);
}

.rocket-launched .particle {
  animation: particleBurst 2s ease-out forwards;
  animation-delay: calc(var(--i) * 0.05s);
}

@keyframes particleBurst {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(calc(var(--i) * 30deg))
      translateY(0) scale(0);
  }
  15% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(calc(var(--i) * 30deg))
      translateY(-40px) scale(1.5);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(calc(var(--i) * 30deg))
      translateY(-300px) scale(0);
  }
}

/* Smoke Trail */
.smoke-container {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 100px;
  pointer-events: none;
}

.smoke {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 30px;
  background: radial-gradient(
    circle,
    rgba(150, 150, 150, 0.5),
    rgba(100, 100, 100, 0.2),
    transparent
  );
  border-radius: 50%;
  opacity: 0;
}

.rocket-launched .smoke {
  animation: smokeRise 2s ease-out infinite;
  animation-delay: var(--delay);
}

@keyframes smokeRise {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(0) scale(0.5);
  }
  20% {
    opacity: 0.6;
  }
  100% {
    opacity: 0;
    transform: translateX(calc(-50% + (var(--i, 0) * 20px))) translateY(-150px)
      scale(2);
  }
}

/* Enhanced 3D Stars */
.stars-3d {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  transform-style: preserve-3d;
}

.star-3d {
  position: absolute;
  width: 4px;
  height: 4px;
  background: radial-gradient(
    circle,
    #fff,
    rgba(255, 255, 255, 0.5),
    transparent
  );
  border-radius: 50%;
  box-shadow: 0 0 4px #fff, 0 0 8px rgba(100, 200, 255, 0.5);
  opacity: 0;
  top: calc(20% + (var(--i) * 5%));
  left: calc(10% + (var(--i) * 6%));
  animation: starTwinkle3D 3s ease-in-out infinite;
  animation-delay: calc(var(--i) * 0.2s);
}

@keyframes starTwinkle3D {
  0%,
  100% {
    opacity: 0;
    transform: scale(0.5) translateZ(0);
    filter: brightness(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.5) translateZ(30px) rotate(180deg);
    filter: brightness(1.5);
  }
}

/* Transition animations */
.rocket-enter-enter-active,
.rocket-enter-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.rocket-enter-enter-from,
.rocket-enter-leave-to {
  opacity: 0;
  transform: translateY(100px) scale(0.5);
}

/* Responsive design */
@media (max-width: 768px) {
  .rocket-container {
    width: 150px;
    height: 150px;
    bottom: 80px;
    right: 30px;
  }

  .rocket-3d {
    width: 100px;
    height: 160px;
  }

  .nose-cone {
    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 50px solid var(--color-primary-color);
  }

  .rocket-body-3d {
    width: 50px;
    height: 85px;
    top: 50px;
  }

  .main-window {
    width: 18px;
    height: 18px;
    top: 16px;
  }

  .side-window-1,
  .side-window-2 {
    width: 10px;
    height: 10px;
  }

  .side-window-1 {
    top: 38px;
  }

  .side-window-2 {
    top: 56px;
  }
}

@media (max-width: 480px) {
  .rocket-container {
    width: 130px;
    height: 130px;
    bottom: 60px;
    right: 20px;
  }

  .rocket-3d {
    width: 95px;
    height: 140px;
  }

  .nose-cone {
    border-left: 22px solid transparent;
    border-right: 22px solid transparent;
    border-bottom: 45px solid var(--color-primary-color);
  }

  .rocket-body-3d {
    width: 44px;
    height: 75px;
    top: 45px;
  }

  .main-window {
    width: 16px;
    height: 16px;
    top: 14px;
  }

  .side-window-1,
  .side-window-2 {
    width: 8px;
    height: 8px;
  }

  .side-window-1 {
    top: 32px;
  }

  .side-window-2 {
    top: 46px;
  }

  .window {
    border: 1.5px solid rgba(255, 255, 255, 0.3);
  }

  .glow-inner {
    width: 140px;
    height: 200px;
  }

  .glow-mid {
    width: 170px;
    height: 230px;
  }

  .glow-outer {
    width: 200px;
    height: 260px;
  }
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  .rocket-3d,
  .rocket-launched,
  .particle,
  .smoke,
  .star-3d,
  .fire-particle,
  .fire-core,
  .fire-glow,
  .exhaust-ring,
  .glow-layer,
  .window-glare,
  .nose-cone,
  .rocket-container:hover {
    transform: scale(1.05);
  }

  .rocket-wrapper {
    transition: opacity 0.3s ease;
  }

  .rocket-launched {
    opacity: 0;
  }
}
</style>
