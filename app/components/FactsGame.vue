<template>
  <div
    ref="gameContainer"
    class="game-container mt-[100px]"
    :class="{ dragging: isDragging }"
  >
    <div class="stars"></div>
    <fire-flies :spawn-rate="40" />
    <div class="game-title">
      <h1 class="font-micro5-regular">
        Think you can get me to spill some secrets?
      </h1>

      <div class="instructions">
        Let's see how good you are... grab those glowing asteroids and smash
        away!
      </div>
    </div>

    <!-- Planets -->
    <div
      v-for="(planet, index) in planets"
      :key="index"
      class="planet"
      :class="{ cracked: planet.cracked }"
      :style="{
        top: planet.top,
        left: planet.left,
        animationDelay: `${index * 0.5}s`,
      }"
      :data-fact="planet.fact"
    >
      <div v-if="!planet.cracked" class="fact-symbol">🔒</div>
    </div>

    <!-- Asteroids -->
    <div
      v-for="asteroid in asteroids"
      :key="asteroid.id"
      class="asteroid"
      :style="{
        left: asteroid.x + 'px',
        top: asteroid.y + 'px',
        animationDelay: asteroid.delay,
      }"
      @mousedown="startDrag($event, asteroid)"
      @touchstart="startDrag($event, asteroid)"
    ></div>

    <!-- Fact Reveals -->
    <div
      v-for="reveal in factReveals"
      :key="reveal.id"
      class="fact-reveal"
      :style="{ left: reveal.x + 'px', top: reveal.y + 'px' }"
    >
      <div style="font-size: 20px; margin-bottom: 15px">💥</div>
      <div>{{ reveal.fact }}</div>
    </div>

    <!-- Smash Text -->
    <div
      v-for="smash in smashTexts"
      :key="smash.id"
      class="smash-text"
      :style="{ left: smash.x + 'px', top: smash.y + 'px' }"
    >
      SMASH!
    </div>

    <!-- Particles -->
    <div
      v-for="particle in particles"
      :key="particle.id"
      class="particle"
      :style="{
        left: particle.x + 'px',
        top: particle.y + 'px',
        '--dx': particle.dx + 'px',
        '--dy': particle.dy + 'px',
      }"
    ></div>

    <!-- Ripples -->
    <div
      v-for="ripple in ripples"
      :key="ripple.id"
      class="ripple"
      :style="{ left: ripple.x + 'px', top: ripple.y + 'px' }"
    ></div>

    <!-- Reset Button -->
    <div v-if="allPlanetsSmashed" class="reset-container">
      <div class="reset-card">
        <div class="reset-emoji">😏</div>
        <div class="reset-text">
          You really want to smash all my secrets again?
        </div>
        <div class="reset-buttons">
          <button class="reset-button play-again" @click="resetGame">
            Let's go again!
          </button>
          <button class="reset-button not-interested" @click="closeGame">
            Nah, you're not that interesting
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {
  Planet,
  Asteroid,
  FactReveal,
  SmashText,
  Particle,
  Ripple,
} from "../utils/types";

const gameContainer = ref<HTMLElement | null>(null);
const isDragging = ref(false);
const draggedAsteroid = ref<Asteroid | null>(null);
const dragOffset = ref({ x: 0, y: 0 });

let nextAsteroidId = 0;
let nextRevealId = 0;
let nextSmashId = 0;
let nextParticleId = 0;
let nextRippleId = 0;

// Function to get random facts without duplicates
const getRandomFacts = (count: number): string[] => {
  const shuffled = [...facts].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

const randomFacts = getRandomFacts(planetPositions.length);
const planets = ref<Planet[]>(
  planetPositions.map((pos, index) => ({
    ...pos,
    fact: randomFacts[index]!,
    cracked: false,
  }))
);

const asteroids = ref<Asteroid[]>([]);
const factReveals = ref<FactReveal[]>([]);
const smashTexts = ref<SmashText[]>([]);
const particles = ref<Particle[]>([]);
const ripples = ref<Ripple[]>([]);
const allPlanetsSmashed = ref(false);

const createAsteroid = (): Asteroid => {
  if (!gameContainer.value) {
    return {
      id: nextAsteroidId++,
      x: 100,
      y: 100,
      delay: Math.random() * 2 + "s",
    };
  }

  const containerRect = gameContainer.value.getBoundingClientRect();
  const padding = 60; // Keep away from edges and UI elements
  const asteroidSize = 40;

  // Calculate side drawer width (18vw) to avoid overlap - only on desktop
  const isMobile = window.innerWidth < 768;
  const sideDrawerWidth = isMobile ? 0 : window.innerWidth * 0.18 + 20; // 18vw + extra padding

  // Define safe zones (avoiding title at top, instructions at bottom, and side drawer on left)
  const minY = 120; // Below title
  const maxY = containerRect.height - (isMobile ? 150 : 100); // Above instructions, more padding on mobile
  const minX = Math.max(padding, sideDrawerWidth); // Avoid side drawer
  const maxX = containerRect.width - asteroidSize - padding;

  return {
    id: nextAsteroidId++,
    x: minX + Math.random() * (maxX - minX),
    y: minY + Math.random() * (maxY - minY),
    delay: Math.random() * 2 + "s",
  };
};

const initAsteroids = () => {
  const asteroidCount = 3;
  for (let i = 0; i < asteroidCount; i++) {
    asteroids.value.push(createAsteroid());
  }
};

const startDrag = (e: MouseEvent | TouchEvent, asteroid: Asteroid) => {
  e.preventDefault();
  draggedAsteroid.value = asteroid;
  isDragging.value = true;

  const touchEvent = e as TouchEvent;
  const mouseEvent = e as MouseEvent;
  const clientX = touchEvent.touches
    ? touchEvent.touches[0]?.clientX
    : mouseEvent.clientX;
  const clientY = touchEvent.touches
    ? touchEvent.touches[0]?.clientY
    : mouseEvent.clientY;

  if (clientX !== undefined && clientY !== undefined) {
    dragOffset.value.x = clientX - asteroid.x;
    dragOffset.value.y = clientY - asteroid.y;
  }

  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", endDrag);
  document.addEventListener("touchmove", drag);
  document.addEventListener("touchend", endDrag);
};

const drag = (e: MouseEvent | TouchEvent) => {
  if (!draggedAsteroid.value) return;

  const touchEvent = e as TouchEvent;
  const mouseEvent = e as MouseEvent;
  const clientX = touchEvent.touches
    ? touchEvent.touches[0]?.clientX
    : mouseEvent.clientX;
  const clientY = touchEvent.touches
    ? touchEvent.touches[0]?.clientY
    : mouseEvent.clientY;

  if (clientX !== undefined && clientY !== undefined) {
    draggedAsteroid.value.x = clientX - dragOffset.value.x;
    draggedAsteroid.value.y = clientY - dragOffset.value.y;
  }
};

const endDrag = () => {
  if (!draggedAsteroid.value) return;

  isDragging.value = false;
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("touchend", endDrag);

  checkCollision(draggedAsteroid.value);
  draggedAsteroid.value = null;
};

const isColliding = (
  x1: number,
  y1: number,
  w1: number,
  h1: number,
  x2: number,
  y2: number,
  w2: number,
  h2: number
): boolean => {
  return !(x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y2 + h2);
};

const checkCollision = (asteroid: Asteroid) => {
  if (!gameContainer.value) return;

  // Get the game container's position to convert coordinates
  const containerRect = gameContainer.value.getBoundingClientRect();

  // Convert asteroid's container-relative position to viewport coordinates
  const asteroidRect = {
    x: asteroid.x + containerRect.left,
    y: asteroid.y + containerRect.top,
    width: 40,
    height: 40,
  };

  const planetElements = gameContainer.value.querySelectorAll(".planet");

  planets.value.forEach((planet, index) => {
    if (planet.cracked) return;

    const planetElement = planetElements[index] as HTMLElement;
    if (!planetElement) return;

    const rect = planetElement.getBoundingClientRect();
    const planetRect = {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: rect.height,
    };

    if (
      isColliding(
        asteroidRect.x,
        asteroidRect.y,
        asteroidRect.width,
        asteroidRect.height,
        planetRect.x,
        planetRect.y,
        planetRect.width,
        planetRect.height
      )
    ) {
      smashPlanet(
        index,
        asteroid,
        planetRect.x + planetRect.width / 2,
        planetRect.y + planetRect.height / 2
      );
    }
  });
};

const smashPlanet = (
  planetIndex: number,
  asteroid: Asteroid,
  centerX: number,
  centerY: number
) => {
  const planet = planets.value[planetIndex];
  if (!planet) return;

  // Remove asteroid
  asteroids.value = asteroids.value.filter((a) => a.id !== asteroid.id);

  // Create new asteroid after delay
  setTimeout(() => {
    asteroids.value.push(createAsteroid());
  }, 500);

  // Crack planet
  planet.cracked = true;

  // Check if all planets are smashed
  checkAllPlanetsSmashed();

  // Create effects
  createParticleExplosion(centerX, centerY);
  createRippleEffect(centerX, centerY);
  showSmashText(centerX, centerY);

  // Reveal fact after delay
  setTimeout(() => {
    revealFact(planet.fact, centerX, centerY);
  }, 600);
};

const checkAllPlanetsSmashed = () => {
  setTimeout(() => {
    allPlanetsSmashed.value = planets.value.every((planet) => planet.cracked);
  }, 15000);
};

const resetGame = () => {
  // Reset all planets
  planets.value.forEach((planet) => {
    planet.cracked = false;
  });

  // Get new random facts
  const newRandomFacts = getRandomFacts(planetPositions.length);
  planets.value.forEach((planet, index) => {
    planet.fact = newRandomFacts[index]!;
  });

  // Clear all effects
  factReveals.value = [];
  smashTexts.value = [];
  particles.value = [];
  ripples.value = [];

  // Reset flag
  allPlanetsSmashed.value = false;
};

const closeGame = () => {
  // Just hide the reset dialog
  allPlanetsSmashed.value = false;
};

const createParticleExplosion = (centerX: number, centerY: number) => {
  for (let i = 0; i < 20; i++) {
    setTimeout(() => {
      const angle = (Math.PI * 2 * i) / 20;
      const distance = 50 + Math.random() * 100;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      const particle: Particle = {
        id: nextParticleId++,
        x: centerX,
        y: centerY,
        dx,
        dy,
      };

      particles.value.push(particle);

      setTimeout(() => {
        particles.value = particles.value.filter((p) => p.id !== particle.id);
      }, 1000);
    }, i * 20);
  }
};

const createRippleEffect = (x: number, y: number) => {
  const ripple: Ripple = {
    id: nextRippleId++,
    x,
    y,
  };

  ripples.value.push(ripple);

  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== ripple.id);
  }, 1000);
};

const showSmashText = (x: number, y: number) => {
  const smash: SmashText = {
    id: nextSmashId++,
    x,
    y,
  };

  smashTexts.value.push(smash);

  setTimeout(() => {
    smashTexts.value = smashTexts.value.filter((s) => s.id !== smash.id);
  }, 1000);
};

const revealFact = (fact: string, x: number, y: number) => {
  // Constrain position to keep modal within viewport bounds
  const isMobile = window.innerWidth < 768;
  const modalWidth = isMobile ? window.innerWidth * 0.85 : 400;
  const modalHeight = isMobile ? 180 : 200;
  const padding = isMobile ? 10 : 40;

  // Constrain X position
  const minX = modalWidth / 2 + padding;
  const maxX = window.innerWidth - modalWidth / 2 - padding;
  const finalX = Math.max(minX, Math.min(maxX, x));

  // Constrain Y position
  const minY = modalHeight / 2 + padding + (isMobile ? 60 : 0); // Account for mobile header
  const maxY = window.innerHeight - modalHeight / 2 - padding;
  const finalY = Math.max(minY, Math.min(maxY, y));

  const reveal: FactReveal = {
    id: nextRevealId++,
    x: finalX,
    y: finalY,
    fact,
  };

  factReveals.value.push(reveal);

  setTimeout(() => {
    factReveals.value = factReveals.value.filter((r) => r.id !== reveal.id);
  }, 5800);
};

const handleResize = () => {
  if (typeof window === "undefined" || !gameContainer.value) return;

  const containerRect = gameContainer.value.getBoundingClientRect();
  const padding = 60;
  const asteroidSize = 40;

  // Calculate side drawer width (18vw) to avoid overlap - only on desktop
  const isMobile = window.innerWidth < 768;
  const sideDrawerWidth = isMobile ? 0 : window.innerWidth * 0.18 + 20; // 18vw + extra padding

  const minY = 120;
  const maxY = containerRect.height - (isMobile ? 150 : 100); // More padding on mobile
  const minX = Math.max(padding, sideDrawerWidth); // Avoid side drawer
  const maxX = containerRect.width - asteroidSize - padding;

  asteroids.value.forEach((asteroid) => {
    // Reposition if out of bounds
    if (
      asteroid.x < minX ||
      asteroid.x > maxX ||
      asteroid.y < minY ||
      asteroid.y > maxY
    ) {
      asteroid.x = minX + Math.random() * (maxX - minX);
      asteroid.y = minY + Math.random() * (maxY - minY);
    }
  });
};

onMounted(() => {
  initAsteroids();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
  document.removeEventListener("mousemove", drag);
  document.removeEventListener("mouseup", endDrag);
  document.removeEventListener("touchmove", drag);
  document.removeEventListener("touchend", endDrag);
});
</script>

<style scoped>
.game-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 90dvh;
  perspective: 1000px;
  background: var(--color-background-color);
  font-family: var(--font-micro5-regular);
  overflow: hidden;
  cursor: grab;
  z-index: 1;
}

.game-container.dragging {
  cursor: grabbing;
}

.stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      var(--color-text-color),
      transparent
    ),
    radial-gradient(2px 2px at 40px 70px, var(--color-text-color), transparent),
    radial-gradient(1px 1px at 90px 40px, var(--color-text-color), transparent),
    radial-gradient(1px 1px at 130px 80px, var(--color-text-color), transparent),
    radial-gradient(2px 2px at 160px 30px, var(--color-text-color), transparent);
  background-repeat: repeat;
  background-size: 200px 100px;
  animation: twinkle 3s ease-in-out infinite alternate;
}

@keyframes twinkle {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}

.planet {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    var(--color-primary-color),
    var(--color-primary-color)
  );
  box-shadow: 0 0 30px var(--color-primary-color),
    inset -20px -20px 40px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
  transition: transform 0.3s ease;
  cursor: pointer;
  animation: float 3s ease-in-out infinite;
}

/* Mobile responsive planet size */
@media (max-width: 768px) {
  .planet {
    width: 70px;
    height: 70px;
    box-shadow: 0 0 15px var(--color-primary-color),
      inset -10px -10px 20px rgba(0, 0, 0, 0.5);
  }

  .planet::before {
    width: 25%;
    height: 25%;
  }
}

.planet:hover {
  transform: scale(1.1) rotateY(15deg);
}

.planet::before {
  content: "";
  position: absolute;
  top: 10%;
  left: 15%;
  width: 30%;
  height: 30%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  filter: blur(5px);
}

.planet.cracked {
  animation: none;
  background: linear-gradient(
    135deg,
    var(--color-primary-color),
    var(--color-primary-color)
  );
  box-shadow: 0 0 50px var(--color-primary-color);
}

.planet.cracked::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
      45deg,
      transparent 45%,
      var(--color-primary-color) 50%,
      transparent 55%
    ),
    linear-gradient(
      -45deg,
      transparent 45%,
      var(--color-primary-color) 50%,
      transparent 55%
    ),
    radial-gradient(
      circle at 30% 30%,
      var(--color-primary-color),
      transparent 40%
    ),
    radial-gradient(
      circle at 70% 70%,
      var(--color-primary-color),
      transparent 40%
    );
  border-radius: 50%;
  animation: crack 0.5s ease-out;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px) rotateY(0deg);
  }
  50% {
    transform: translateY(-10px) rotateY(180deg);
  }
}

@keyframes crack {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.fact-symbol {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: var(--color-text-color);
  z-index: 2;
  animation: pulse 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .fact-symbol {
    font-size: 16px;
  }
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.7;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
}

.fact-reveal {
  position: fixed;
  transform: translate(-50%, -50%);
  color: var(--color-text-color);
  font-size: 18px;
  text-align: center;
  background: rgba(0, 0, 0, 0.95);
  padding: 30px;
  border-radius: 15px;
  border: 3px solid var(--color-primary-color);
  box-shadow: 0 0 40px var(--color-primary-color),
    0 0 80px var(--color-primary-color);
  max-width: 400px;
  min-width: 300px;
  opacity: 0;
  z-index: 9999;
  pointer-events: none;
  animation: revealPop 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
  backdrop-filter: blur(10px);
  font-family: var(--font-iceland-regular);
}

@media (max-width: 768px) {
  .fact-reveal {
    font-size: 16px;
    padding: 20px;
    max-width: 85%;
    min-width: auto;
    border: 2px solid var(--color-primary-color);
  }
}

@keyframes revealPop {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0) rotate(-180deg);
    box-shadow: 0 0 0 var(--color-primary-color);
  }
  60% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.15) rotate(5deg);
    box-shadow: 0 0 60px var(--color-primary-color),
      0 0 100px var(--color-primary-color);
  }
  80% {
    transform: translate(-50%, -50%) scale(0.95) rotate(-3deg);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1) rotate(0deg);
    box-shadow: 0 0 40px var(--color-primary-color),
      0 0 80px var(--color-primary-color);
  }
}

.asteroid {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    135deg,
    var(--color-text-color),
    var(--color-text-color)
  );
  border-radius: 50% 40% 50% 40%;
  box-shadow: 0 0 25px var(--color-primary-color),
    0 0 40px var(--color-primary-color);
  cursor: grab;
  transition: transform 0.1s ease;
  z-index: 1000;
}

@media (max-width: 768px) {
  .asteroid {
    width: 30px;
    height: 30px;
    box-shadow: 0 0 15px var(--color-primary-color),
      0 0 25px var(--color-primary-color);
  }
}

.asteroid:active {
  cursor: grabbing;
  transform: scale(1.2);
}

.asteroid::before {
  content: "";
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: radial-gradient(circle, var(--color-primary-color), transparent);
  border-radius: 50%;
  opacity: 0;
  animation: glow 2s ease-in-out infinite alternate;
}

@keyframes glow {
  from {
    opacity: 0.4;
    transform: scale(0.9);
  }
  to {
    opacity: 0.8;
    transform: scale(1.3);
  }
}

.particle {
  position: fixed;
  width: 5px;
  height: 5px;
  background: var(--color-primary-color);
  border-radius: 50%;
  box-shadow: 0 0 5px var(--color-primary-color);
  animation: explode 1s ease-out forwards;
  pointer-events: none;
  z-index: 9997;
}

@keyframes explode {
  0% {
    transform: scale(1) translate(0, 0);
    opacity: 1;
  }
  100% {
    transform: scale(0) translate(var(--dx, 0), var(--dy, 0));
    opacity: 0;
  }
}

.ripple {
  position: absolute;
  border: 2px solid var(--color-primary-color);
  border-radius: 50%;
  animation: ripple 1s ease-out forwards;
  pointer-events: none;
}

@keyframes ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
}

.game-title {
  position: absolute;
  top: 20px;
  color: var(--color-text-color);
  font-size: 38px;
  text-align: center;
  z-index: 10;
  animation: titleGlow 3s ease-in-out infinite;
  padding: 0 1rem;
  width: 100%;
}

@media (max-width: 768px) {
  .game-title {
    font-size: 20px;
    top: 10px;
  }
}

@keyframes titleGlow {
  0%,
  100% {
    text-shadow: 0 0 10px var(--color-primary-color);
  }
  50% {
    text-shadow: 0 0 20px var(--color-primary-color),
      0 0 30px var(--color-primary-color);
  }
}

.instructions {
  color: var(--color-text-color);
  font-size: 18px;
  text-align: center;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .instructions {
    font-size: 16px;
    bottom: 10px;
  }
}

.smash-text {
  position: fixed;
  color: var(--color-primary-color);
  font-size: 32px;
  font-weight: bold;
  pointer-events: none;
  z-index: 9998;
  animation: smashFade 1s ease-out forwards;
  text-shadow: 0 0 10px var(--color-primary-color),
    0 0 20px var(--color-primary-color);
  transform: translate(-50%, -50%);
}

@media (max-width: 768px) {
  .smash-text {
    font-size: 20px;
  }
}

@keyframes smashFade {
  0% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.5) rotate(10deg);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(2.5) translateY(-80px) rotate(-10deg);
  }
}

.reset-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10000;
  animation: resetFadeIn 0.5s ease-out forwards;
}

@keyframes resetFadeIn {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}

.reset-card {
  background: rgba(0, 0, 0, 0.95);
  border: 3px solid var(--color-primary-color);
  border-radius: 20px;
  padding: 40px 50px;
  box-shadow: 0 0 40px var(--color-primary-color),
    0 0 80px var(--color-primary-color);
  animation: pulsate 2s ease-in-out infinite;
  backdrop-filter: blur(10px);
  max-width: 500px;
}

@media (max-width: 768px) {
  .reset-card {
    padding: 25px 20px;
    width: 80vw;
    max-width: 80vw;
    border: 2px solid var(--color-primary-color);
  }
}

@keyframes pulsate {
  0%,
  100% {
    box-shadow: 0 0 40px var(--color-primary-color),
      0 0 80px var(--color-primary-color);
  }
  50% {
    box-shadow: 0 0 60px var(--color-primary-color),
      0 0 120px var(--color-primary-color);
  }
}

.reset-buttons {
  display: flex;
  gap: 15px;
  margin-top: 25px;
  justify-content: center;
  flex-wrap: wrap;
}

.reset-button {
  background: var(--color-primary-color);
  color: var(--color-background-color);
  border: 2px solid var(--color-primary-color);
  border-radius: 10px;
  padding: 15px 25px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 0 15px var(--color-primary-color);
  font-family: "Courier New", monospace;
}

@media (max-width: 768px) {
  .reset-button {
    padding: 12px 18px;
    font-size: 13px;
  }
}

.reset-button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px var(--color-primary-color);
}

.reset-button:active {
  transform: scale(0.95);
}

.reset-button.play-again {
  background: var(--color-primary-color);
  color: var(--color-background-color);
}

.reset-button.not-interested {
  background: transparent;
  color: var(--color-text-color);
  border-color: var(--color-text-color);
  box-shadow: none;
}

.reset-button.not-interested:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 15px var(--color-text-color);
}

.reset-emoji {
  font-size: 48px;
  text-align: center;
  margin-bottom: 20px;
  animation: emojiFloat 2s ease-in-out infinite;
}

@media (max-width: 768px) {
  .reset-emoji {
    font-size: 32px;
    margin-bottom: 15px;
  }
}

@keyframes emojiFloat {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

.reset-text {
  color: var(--color-text-color);
  font-size: 22px;
  text-align: center;
  margin-bottom: 10px;
  font-weight: bold;
}

@media (max-width: 768px) {
  .reset-text {
    font-size: 16px;
  }
}

.reset-subtext {
  color: var(--color-text-color);
  font-size: 16px;
  text-align: center;
  opacity: 0.7;
}
</style>
