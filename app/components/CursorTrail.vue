<template>
  <div class="cursor-trail-container" ref="containerRef">
    <canvas ref="canvasRef" class="cursor-trail-canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import type {
  CursorTrailParticle,
  CursorTrailParticleShape,
} from "../utils/types";

const canvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
const particles = ref<CursorTrailParticle[]>([]);
const mouseX = ref(0);
const mouseY = ref(0);
const lastSpawnTime = ref(0);
const animationFrameId = ref<number | null>(null);

// Configuration
const SPAWN_INTERVAL = 20; // milliseconds between particle spawns
const MAX_PARTICLES = 100;
const PARTICLE_LIFE = 60; // frames

// Create a new particle
const { getParticleShape, primaryColor } = useTheme();
const createParticle = (x: number, y: number): CursorTrailParticle => {
  const shape = getParticleShape();
  const color = primaryColor.value;

  return {
    x,
    y,
    vx: (Math.random() - 0.5) * 2,
    vy: (Math.random() - 0.5) * 2,
    life: PARTICLE_LIFE,
    maxLife: PARTICLE_LIFE,
    size: Math.random() * 8 + 4,
    color,
    shape,
  };
};

// Draw different particle shapes
const drawParticle = (
  ctx: CanvasRenderingContext2D,
  particle: CursorTrailParticle
) => {
  const opacity = particle.life / particle.maxLife;
  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.fillStyle = particle.color;
  ctx.strokeStyle = particle.color;
  ctx.lineWidth = 2;

  switch (particle.shape) {
    case "circle":
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
      break;

    case "star":
      drawStar(
        ctx,
        particle.x,
        particle.y,
        5,
        particle.size,
        particle.size / 2
      );
      break;

    case "triangle":
      drawTriangle(ctx, particle.x, particle.y, particle.size);
      break;

    case "square":
      ctx.fillRect(
        particle.x - particle.size / 2,
        particle.y - particle.size / 2,
        particle.size,
        particle.size
      );
      break;

    case "heart":
      drawHeart(ctx, particle.x, particle.y, particle.size);
      break;

    case "sparkle":
      drawSparkle(ctx, particle.x, particle.y, particle.size);
      break;
  }

  ctx.restore();
};

// Draw a star shape
const drawStar = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  spikes: number,
  outerRadius: number,
  innerRadius: number
) => {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }

  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fill();
};

// Draw a triangle
const drawTriangle = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number
) => {
  ctx.beginPath();
  ctx.moveTo(cx, cy - size);
  ctx.lineTo(cx - size, cy + size);
  ctx.lineTo(cx + size, cy + size);
  ctx.closePath();
  ctx.fill();
};

// Draw a heart
const drawHeart = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number
) => {
  const topCurveHeight = size * 0.3;
  ctx.beginPath();
  ctx.moveTo(cx, cy + size / 4);

  // Left side
  ctx.bezierCurveTo(
    cx,
    cy - topCurveHeight,
    cx - size,
    cy - topCurveHeight,
    cx - size,
    cy + size / 4
  );
  ctx.bezierCurveTo(
    cx - size,
    cy + (size + topCurveHeight) / 2,
    cx,
    cy + (size + topCurveHeight) / 1.2,
    cx,
    cy + size
  );

  // Right side
  ctx.bezierCurveTo(
    cx,
    cy + (size + topCurveHeight) / 1.2,
    cx + size,
    cy + (size + topCurveHeight) / 2,
    cx + size,
    cy + size / 4
  );
  ctx.bezierCurveTo(
    cx + size,
    cy - topCurveHeight,
    cx,
    cy - topCurveHeight,
    cx,
    cy + size / 4
  );

  ctx.fill();
};

// Draw a sparkle (plus shape with rotation)
const drawSparkle = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  size: number
) => {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(Math.PI / 4);

  // Draw cross
  ctx.fillRect(-size / 6, -size, size / 3, size * 2);
  ctx.fillRect(-size, -size / 6, size * 2, size / 3);

  ctx.restore();
};

// Update particles
const updateParticles = () => {
  particles.value = particles.value.filter((particle) => {
    particle.x += particle.vx;
    particle.y += particle.vy;
    particle.life -= 1;
    particle.vx *= 0.98; // Friction
    particle.vy *= 0.98;

    return particle.life > 0;
  });
};

// Animation loop
const animate = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Update and draw particles
  updateParticles();
  particles.value.forEach((particle) => {
    drawParticle(ctx, particle);
  });

  animationFrameId.value = requestAnimationFrame(animate);
};

// Handle mouse move
const handleMouseMove = (e: MouseEvent) => {
  mouseX.value = e.clientX;
  mouseY.value = e.clientY;

  const now = Date.now();
  if (now - lastSpawnTime.value > SPAWN_INTERVAL) {
    if (particles.value.length < MAX_PARTICLES) {
      particles.value.push(createParticle(mouseX.value, mouseY.value));
      lastSpawnTime.value = now;
    }
  }
};

// Handle touch move (mobile)
const handleTouchMove = (e: TouchEvent) => {
  if (e.touches.length > 0) {
    const touch = e.touches[0];
    mouseX.value = touch?.clientX || 0;
    mouseY.value = touch?.clientY || 0;

    const now = Date.now();
    if (now - lastSpawnTime.value > SPAWN_INTERVAL) {
      if (particles.value.length < MAX_PARTICLES) {
        particles.value.push(createParticle(mouseX.value, mouseY.value));
        lastSpawnTime.value = now;
      }
    }
  }
};

// Resize canvas
const resizeCanvas = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

// Initialize
onMounted(() => {
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", handleMouseMove);
  window.addEventListener("touchmove", handleTouchMove, { passive: true });

  animate();
});

// Cleanup
onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("mousemove", handleMouseMove);
  window.removeEventListener("touchmove", handleTouchMove);

  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value);
  }
});
</script>

<style scoped>
.cursor-trail-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999;
  overflow: hidden;
}

.cursor-trail-canvas {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
