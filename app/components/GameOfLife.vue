<template>
  <div
    ref="containerRef"
    class="gameoflife relative overflow-hidden transition-colors duration-300"
  >
    <canvas ref="canvasRef" class="block" />
  </div>
</template>

<script setup lang="ts">
// divine - Conway's Game of Life implementation in Vue 3

const canvasRef = ref<HTMLCanvasElement | null>(null);
const containerRef = ref<HTMLDivElement | null>(null);

onMounted(() => {
  const canvas = canvasRef.value;
  const container = containerRef.value;
  if (!canvas || !container) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let animationFrameId: number;
  let grid: number[][] = [];
  let cols = 0;
  let rows = 0;
  const resolution = 10;

  // --- Grid Logic ---
  const make2DArray = (c: number, r: number) => {
    const arr = new Array(c);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(r).fill(0);
    }
    return arr;
  };

  const initGrid = (c: number, r: number) => {
    const arr = make2DArray(c, r);
    for (let i = 0; i < c; i++) {
      for (let j = 0; j < r; j++) {
        arr[i][j] = Math.random() > 0.6 ? 1 : 0;
      }
    }
    return arr;
  };

  const handleResize = () => {
    if (!container || !canvas) return;
    const rect = container.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
    cols = Math.ceil(canvas.width / resolution);
    rows = Math.ceil(canvas.height / resolution);
    grid = initGrid(cols, rows);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const col = Math.floor(x / resolution);
    const row = Math.floor(y / resolution);
    const extent = 2;

    for (let i = -extent; i <= extent; i++) {
      for (let j = -extent; j <= extent; j++) {
        const c = col + i;
        const r = row + j;
        if (c >= 0 && c < cols && r >= 0 && r < rows && grid[c]) {
          if (Math.random() > 0.5) grid[c][r] = 1;
        }
      }
    }
  };

  const computeNextGen = (currentGrid: number[][]) => {
    const next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const currentRow = currentGrid[i];
        if (!currentRow) continue;
        const state = currentRow[j] ?? 0;
        let neighbors = 0;

        for (let x = -1; x < 2; x++) {
          for (let y = -1; y < 2; y++) {
            const col = (i + x + cols) % cols;
            const row = (j + y + rows) % rows;
            const cellRow = currentGrid[col];
            if (cellRow) {
              neighbors += cellRow[row] ?? 0;
            }
          }
        }

        neighbors -= state;

        if (state === 0 && neighbors === 3) next[i][j] = 1;
        else if (state === 1 && (neighbors < 2 || neighbors > 3))
          next[i][j] = 0;
        else next[i][j] = state;
      }
    }
    return next;
  };

  const draw = () => {
    if (!canvas || !container) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = getComputedStyle(container).color;

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i]?.[j] === 1) {
          ctx.fillRect(
            i * resolution,
            j * resolution,
            resolution - 1,
            resolution - 1
          );
        }
      }
    }
  };

  let frameCount = 0;
  const animate = () => {
    frameCount++;
    if (frameCount % 4 !== 0) {
      draw();
      animationFrameId = requestAnimationFrame(animate);
      return;
    }

    grid = computeNextGen(grid);
    draw();
    animationFrameId = requestAnimationFrame(animate);
  };

  handleResize();
  window.addEventListener("resize", handleResize);
  canvas.addEventListener("mousemove", handleMouseMove);

  const handleTouch = (e: TouchEvent) => {
    const touch = e.touches[0];
    if (!touch) return;
    const mouseEvent = new MouseEvent("mousemove", {
      clientX: touch.clientX,
      clientY: touch.clientY,
    });
    handleMouseMove(mouseEvent);
  };

  canvas.addEventListener("touchmove", handleTouch);
  animate();

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    if (canvas) {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouch);
    }
    cancelAnimationFrame(animationFrameId);
  });
});
</script>

<style scoped>
.gameoflife {
  background-color: var(--color-background-color);
  color: var(--color-text-color);
  height: 20vh;
  width: 100%;
}
</style>
