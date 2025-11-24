<template>
  <div class="skill-galaxy-container">
    <canvas ref="canvas" id="c"></canvas>
  </div>
</template>

<script setup lang="ts">
const canvas = ref<HTMLCanvasElement | null>(null);

let ctx: CanvasRenderingContext2D | null = null;
let width = 0;
let height = 0;
let cx = 0;
let cy = 0;
let DPR = Math.max(1, window.devicePixelRatio || 1);

let stars: Array<{ x: number; y: number; r: number; a: number }> = [];
let center: {
  x: () => number;
  y: () => number;
  r: number;
  baseR: number | null;
} = {
  x: () => cx,
  y: () => cy,
  r: 0,
  baseR: null,
};

interface Planet {
  id: string;
  label: string;
  desc: string;
  color1: string;
  color2: string;
  angle: number;
  orbitRadius: number;
  speed: number;
  size: number;
  wobble: number;
  trail: Array<{ x: number; y: number; a: number }>;
  maxTrail: number;
  hovered: boolean;
  scale: number;
  glow: number;
  _screenX?: number;
  _screenY?: number;
  _screenR?: number;
}

let planets: Planet[] = [];
let offsetX = 0;
let offsetY = 0;
let drag = { down: false, x: 0, y: 0, vx: 0, vy: 0 };
let pointer = { x: 0, y: 0, down: false, lastTap: 0 };
let last = 0;
let lastTapTs = 0;
let animationId: number | null = null;

// Color interpolation for smooth theme transitions
let currentBgColor = { r: 0, g: 0, b: 0 };
let targetBgColor = { r: 0, g: 0, b: 0 };
let currentTextColor = { r: 255, g: 255, b: 255 };
let targetTextColor = { r: 255, g: 255, b: 255 };

function parseColor(colorString: string): { r: number; g: number; b: number } {
  // Remove any whitespace
  colorString = colorString.trim();

  // Handle hex colors
  if (colorString.startsWith("#")) {
    const hex = colorString.replace("#", "");
    return {
      r: parseInt(hex.substring(0, 2), 16),
      g: parseInt(hex.substring(2, 4), 16),
      b: parseInt(hex.substring(4, 6), 16),
    };
  }

  // Handle rgb/rgba colors
  const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (match && match[1] && match[2] && match[3]) {
    return {
      r: parseInt(match[1]),
      g: parseInt(match[2]),
      b: parseInt(match[3]),
    };
  }

  // Default fallback
  return { r: 0, g: 0, b: 0 };
}

function lerpColor(
  current: { r: number; g: number; b: number },
  target: { r: number; g: number; b: number },
  speed: number
) {
  current.r += (target.r - current.r) * speed;
  current.g += (target.g - current.g) * speed;
  current.b += (target.b - current.b) * speed;
}

function resize() {
  if (!canvas.value) return;

  const container = canvas.value.parentElement;
  if (!container) return;

  DPR = Math.max(1, window.devicePixelRatio || 1);
  const containerWidth = container.clientWidth;
  const containerHeight = container.clientHeight;

  width = Math.floor(containerWidth * DPR);
  height = Math.floor(containerHeight * DPR);
  canvas.value.width = width;
  canvas.value.height = height;
  canvas.value.style.width = containerWidth + "px";
  canvas.value.style.height = containerHeight + "px";
  cx = width / 2;
  cy = height / 2;
}

function initStars() {
  stars = [];
  for (let i = 0; i < 160; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.7 + 0.2,
      a: Math.random() * 0.9 + 0.1,
    });
  }
}

function initCenter() {
  center.r = Math.min(width, height) * 0.06;
  center.baseR = center.r;
}

function initPlanets() {
  planets = [];
  const orbitRadiusBase = Math.min(width, height) * 0.22;
  const planetCount = SKILLS.length;

  for (let i = 0; i < planetCount; i++) {
    const skill = SKILLS[i];
    if (!skill) continue;

    const angle = (i / planetCount) * Math.PI * 2;
    const orbitRadius =
      orbitRadiusBase + (Math.sin(i * 1.3) * 30 + (i % 2 ? 30 : -30));
    const size = Math.max(8, 14 + Math.random() * 8) * DPR;

    const p: Planet = {
      id: skill.id,
      label: skill.label,
      desc: skill.text,
      color1: skill.color1,
      color2: skill.color2,
      angle,
      orbitRadius,
      speed: (0.0004 + Math.random() * 0.0006) * (i % 2 ? 1 : -1),
      size,
      wobble: Math.random() * 0.002 + 0.0006,
      trail: [],
      maxTrail: 22,
      hovered: false,
      scale: 1,
      glow: 0,
    };
    planets.push(p);
  }
}

function dist(ax: number, ay: number, bx: number, by: number) {
  const dx = ax - bx;
  const dy = ay - by;
  return Math.sqrt(dx * dx + dy * dy);
}

function update(ts: number) {
  const dt = ts - last;
  last = ts;

  if (drag.down) {
    offsetX += drag.vx * 0.6 * DPR;
    offsetY += drag.vy * 0.6 * DPR;
    offsetX = Math.max(-width * 0.12, Math.min(width * 0.12, offsetX));
    offsetY = Math.max(-height * 0.12, Math.min(height * 0.12, offsetY));
  } else {
    offsetX *= 0.92;
    offsetY *= 0.92;
  }

  planets.forEach((p, idx) => {
    p.angle += p.speed * dt;
    p.angle += Math.sin(ts * p.wobble + idx) * 0.00002;

    const px = cx + offsetX + Math.cos(p.angle) * p.orbitRadius;
    const py = cy + offsetY + Math.sin(p.angle) * (p.orbitRadius * 0.86);

    p.trail.unshift({ x: px, y: py, a: 1.0 });
    if (p.trail.length > p.maxTrail) p.trail.pop();

    for (let i = 0; i < p.trail.length; i++) {
      const trailPoint = p.trail[i];
      if (trailPoint) trailPoint.a *= 0.93;
    }

    const mDX = pointer.x - px;
    const mDY = pointer.y - py;
    const d = Math.sqrt(mDX * mDX + mDY * mDY);
    const screenRadius = p.size * 1.6;
    const isHover = d < screenRadius;

    if (isHover) {
      p.hovered = true;
      p.scale += (1.18 - p.scale) * 0.22;
      p.glow += (1 - p.glow) * 0.18;
    } else {
      p.hovered = false;
      p.scale += (1 - p.scale) * 0.08;
      p.glow += (0 - p.glow) * 0.06;
    }
  });
}

function hexToRGBA(hex: string, a: number) {
  const c = hex.replace("#", "");
  const r = parseInt(c.substring(0, 2), 16);
  const g = parseInt(c.substring(2, 4), 16);
  const b = parseInt(c.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function render() {
  if (!ctx || !canvas.value) return;

  // Update target colors from CSS variables
  const bgColorStr = getComputedStyle(canvas.value)
    .getPropertyValue("--color-background-color")
    .trim();
  const textColorStr =
    getComputedStyle(canvas.value)
      .getPropertyValue("--color-text-color")
      .trim() || "rgba(255,255,255,1)";

  if (bgColorStr) {
    targetBgColor = parseColor(bgColorStr);
  }
  targetTextColor = parseColor(textColorStr);

  // Interpolate colors for smooth transition
  lerpColor(currentBgColor, targetBgColor, 0.08);
  lerpColor(currentTextColor, targetTextColor, 0.08);

  ctx.clearRect(0, 0, width, height);

  // stars background
  ctx.save();
  ctx.globalAlpha = 1.0;
  ctx.fillStyle = `rgb(${Math.round(currentBgColor.r)},${Math.round(
    currentBgColor.g
  )},${Math.round(currentBgColor.b)})`;
  ctx.fillRect(0, 0, width, height);
  ctx.globalCompositeOperation = "lighter";

  // Use interpolated text color for stars
  const textColor = `rgb(${Math.round(currentTextColor.r)},${Math.round(
    currentTextColor.g
  )},${Math.round(currentTextColor.b)})`;

  for (const s of stars) {
    ctx.globalAlpha = s.a * 0.9;
    ctx.fillStyle = textColor;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r * DPR, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.globalCompositeOperation = "source-over";
  ctx.restore();

  // draw trails for each planet
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  planets.forEach((p) => {
    for (let i = 0; i < p.trail.length; i += 1) {
      const t = p.trail[i];
      if (!t || !ctx) continue;
      const alpha = t.a * (1 - i / p.trail.length) * 0.9;
      const size =
        p.size * (1 - i / p.trail.length) * (1 + (i / p.trail.length) * 0.06);
      const col1 = hexToRGBA(p.color1, alpha * 0.9);
      const col2 = hexToRGBA(p.color2, alpha * 0.6);
      const grd = ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, size * 1.4);
      grd.addColorStop(0, col1);
      grd.addColorStop(0.6, col2);
      grd.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(t.x, t.y, size, 0, Math.PI * 2);
      ctx.fill();
    }
  });
  ctx.restore();

  // orbit rings
  if (ctx) {
    ctx.save();
    ctx.strokeStyle = "rgba(255,255,255,0.02)";
    ctx.lineWidth = 1 * DPR;
    planets.forEach((p) => {
      if (!ctx) return;
      ctx.beginPath();
      ctx.ellipse(
        cx + offsetX,
        cy + offsetY,
        p.orbitRadius,
        p.orbitRadius * 0.86,
        0,
        0,
        Math.PI * 2
      );
      ctx.stroke();
    });
    ctx.restore();
  }

  // central orb glow
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  const baseR = center.baseR || center.r;
  const cgrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR * 3.6);
  cgrad.addColorStop(0, "rgba(160,120,255,0.28)");
  cgrad.addColorStop(0.35, "rgba(120,200,255,0.08)");
  cgrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = cgrad;
  ctx.beginPath();
  ctx.arc(cx, cy, baseR * 3.4, 0, Math.PI * 2);
  ctx.fill();

  // bright core
  const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, baseR);
  coreGrad.addColorStop(0, "rgba(255,255,255,0.95)");
  coreGrad.addColorStop(0.2, "rgba(200,180,255,0.95)");
  coreGrad.addColorStop(1, "rgba(110,80,255,0.7)");
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
  ctx.fill();

  // center subtle ring
  ctx.lineWidth = 2 * DPR;
  ctx.strokeStyle = "rgba(255,255,255,0.08)";
  ctx.beginPath();
  ctx.arc(cx, cy, baseR * 1.5, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // draw planets
  ctx.save();
  ctx.globalCompositeOperation = "lighter";
  planets.forEach((p, idx) => {
    const px = cx + offsetX + Math.cos(p.angle) * p.orbitRadius;
    const py = cy + offsetY + Math.sin(p.angle) * (p.orbitRadius * 0.86);

    const realSize = p.size * p.scale;

    // planet glow layers
    const glowRad = realSize * 3 * (1 + p.glow * 0.6);
    const g = ctx!.createRadialGradient(px, py, 0, px, py, glowRad);
    g.addColorStop(0, hexToRGBA(p.color1, 0.55 * (0.6 + p.glow * 0.6)));
    g.addColorStop(0.35, hexToRGBA(p.color2, 0.28 * (0.6 + p.glow * 0.6)));
    g.addColorStop(1, "rgba(0,0,0,0)");
    ctx!.fillStyle = g;
    ctx!.beginPath();
    ctx!.arc(px, py, glowRad, 0, Math.PI * 2);
    ctx!.fill();

    // planet body with subtle gradient
    const pg = ctx!.createRadialGradient(
      px - realSize * 0.3,
      py - realSize * 0.3,
      realSize * 0.1,
      px,
      py,
      realSize
    );
    pg.addColorStop(0, hexToRGBA("#ffffff", 0.95));
    pg.addColorStop(0.08, hexToRGBA(p.color1, 0.98));
    pg.addColorStop(0.7, hexToRGBA(p.color2, 0.98));
    pg.addColorStop(1, hexToRGBA("#000000", 0.05));
    ctx!.fillStyle = pg;
    ctx!.beginPath();
    ctx!.arc(px, py, realSize, 0, Math.PI * 2);
    ctx!.fill();

    // shiny crescent
    ctx!.globalCompositeOperation = "lighter";
    const crescentGrad = ctx!.createLinearGradient(
      px - realSize,
      py - realSize,
      px + realSize,
      py + realSize
    );
    crescentGrad.addColorStop(0, hexToRGBA("#ffffff", 0.28 + p.glow * 0.3));
    crescentGrad.addColorStop(1, "rgba(255,255,255,0)");
    ctx!.fillStyle = crescentGrad;
    ctx!.beginPath();
    ctx!.ellipse(
      px - realSize * 0.35,
      py - realSize * 0.35,
      realSize * 0.8,
      realSize * 0.6,
      -Math.PI / 6,
      0,
      Math.PI * 2
    );
    ctx!.fill();

    // small ring for some planets
    if (idx % 3 === 0) {
      ctx!.strokeStyle = hexToRGBA("#ffffff", 0.06 + p.glow * 0.05);
      ctx!.lineWidth = 1.2 * DPR;
      ctx!.beginPath();
      ctx!.ellipse(
        px,
        py,
        realSize * 1.9,
        realSize * 1.15,
        p.angle * 0.6,
        0,
        Math.PI * 2
      );
      ctx!.stroke();
    }

    // planet label
    ctx!.globalCompositeOperation = "source-over";
    ctx!.fillStyle = "rgba(255,255,255," + 0.95 * (0.9 - p.glow * 0.4) + ")";
    const fontFamily =
      getComputedStyle(canvas.value!)
        .getPropertyValue("--font-micro5-regular")
        .trim() || "Inter";
    ctx!.font = `${14 * DPR}px ${fontFamily}`;
    ctx!.textAlign = "center";
    ctx!.fillText(p.label, px, py + realSize + 18 * DPR);

    // store screen coords for hit tests
    p._screenX = px;
    p._screenY = py;
    p._screenR = realSize;
  });
  ctx.restore();
}

function handlePointer() {
  let anyHover = false;
  for (const p of planets) {
    const d = dist(pointer.x, pointer.y, p._screenX || 0, p._screenY || 0);
    if (d < (p._screenR || 0) * 1.6) {
      anyHover = true;
      if (pointer.down && performance.now() - lastTapTs > 240) {
        lastTapTs = performance.now();
      }
    }
  }
}

function loop(ts: number) {
  update(ts);
  render();
  handlePointer();
  animationId = requestAnimationFrame(loop);
}

onMounted(() => {
  if (!canvas.value) return;

  ctx = canvas.value.getContext("2d", { alpha: true });
  if (!ctx) return;

  // Initialize colors from CSS variables
  const bgColorStr = getComputedStyle(canvas.value)
    .getPropertyValue("--color-background-color")
    .trim();
  const textColorStr =
    getComputedStyle(canvas.value)
      .getPropertyValue("--color-text-color")
      .trim() || "rgba(255,255,255,1)";

  if (bgColorStr) {
    currentBgColor = parseColor(bgColorStr);
    targetBgColor = parseColor(bgColorStr);
  }
  currentTextColor = parseColor(textColorStr);
  targetTextColor = parseColor(textColorStr);

  resize();
  initStars();
  initCenter();
  initPlanets();

  // Event listeners
  const handleResize = () => {
    resize();
  };

  const handlePointerDown = (e: PointerEvent) => {
    if (!canvas.value) return;
    canvas.value.setPointerCapture(e.pointerId);
    drag.down = true;
    drag.x = e.clientX;
    drag.y = e.clientY;
  };

  const handlePointerMove = (e: PointerEvent) => {
    if (!canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();
    pointer.x = (e.clientX - rect.left) * DPR;
    pointer.y = (e.clientY - rect.top) * DPR;

    if (drag.down) {
      const dx = e.clientX - drag.x;
      const dy = e.clientY - drag.y;
      drag.vx = dx;
      drag.vy = dy;
      drag.x = e.clientX;
      drag.y = e.clientY;
    }
  };

  const handlePointerUp = (e: PointerEvent) => {
    if (!canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();
    drag.down = false;
    drag.vx = 0;
    drag.vy = 0;
    pointer.down = false;
    pointer.x = (e.clientX - rect.left) * DPR;
    pointer.y = (e.clientY - rect.top) * DPR;
  };

  const handlePointerDownState = (e: PointerEvent) => {
    if (!canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();
    pointer.down = true;
    pointer.x = (e.clientX - rect.left) * DPR;
    pointer.y = (e.clientY - rect.top) * DPR;
  };

  const handleClick = (e: MouseEvent) => {
    if (!canvas.value) return;
    const rect = canvas.value.getBoundingClientRect();
    const px = (e.clientX - rect.left) * DPR;
    const py = (e.clientY - rect.top) * DPR;
    for (const p of planets) {
      if (
        dist(px, py, p._screenX || 0, p._screenY || 0) <
        (p._screenR || 0) * 1.6
      ) {
        p.scale = 1.4;
        p.glow = 1.0;
      }
    }
  };

  window.addEventListener("resize", handleResize);
  canvas.value.addEventListener("pointerdown", handlePointerDown);
  canvas.value.addEventListener("pointermove", handlePointerMove);
  canvas.value.addEventListener("pointerup", handlePointerUp);
  canvas.value.addEventListener("pointerdown", handlePointerDownState);
  canvas.value.addEventListener("click", handleClick);

  last = performance.now();
  animationId = requestAnimationFrame(loop);

  // Cleanup function
  onUnmounted(() => {
    if (animationId !== null) {
      cancelAnimationFrame(animationId);
    }
    window.removeEventListener("resize", handleResize);
    if (canvas.value) {
      canvas.value.removeEventListener("pointerdown", handlePointerDown);
      canvas.value.removeEventListener("pointermove", handlePointerMove);
      canvas.value.removeEventListener("pointerup", handlePointerUp);
      canvas.value.removeEventListener("pointerdown", handlePointerDownState);
      canvas.value.removeEventListener("click", handleClick);
    }
  });
});
</script>

<style scoped>
.skill-galaxy-container {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-background-color);
  font-family: var(--font-micro5-regular);
  transition: all 0.3s ease;
  width: 100%;
  height: 80vh;
  min-height: 600px;
}

/* Mobile responsive canvas size */
@media (max-width: 768px) {
  .skill-galaxy-container {
    height: 70vh;
    min-height: 500px;
  }
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease, filter 0.3s ease;
}
</style>
