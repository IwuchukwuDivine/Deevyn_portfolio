import useThemeStore from "~/store/theme";
import type { CursorTrailParticleShape } from "~/utils/types";

export default () => {
  const { currentTheme } = storeToRefs(useThemeStore());

  const getParticleShape = (): CursorTrailParticleShape => {
    const shapeMap: Record<string, CursorTrailParticleShape> = {
      "theme-default": "star",
      "theme-deep-space": "circle",
      "theme-cosmic-void": "sparkle",
      "theme-nebula-glow": "heart",
      "theme-stellar-gold": "star",
      "theme-aurora-night": "triangle",
      "theme-navy-pink": "heart",
      "theme-warm-purple": "sparkle",
      "theme-grey-red": "square",
    };
    return shapeMap[currentTheme.value?.name || "theme-default"] || "star";
  };
  const primaryColor = computed(() => currentTheme.value?.color || "#00ffff");
  return {
    currentTheme,
    getParticleShape,
    primaryColor,
  };
};
