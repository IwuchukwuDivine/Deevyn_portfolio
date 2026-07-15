import { defineStore } from "pinia";

const useThemeStore = defineStore(
  "theme",
  () => {
    const currentTheme = ref({ ...themes[0] });

    return {
      currentTheme,
    };
  },
  {
    persist: {
      storage: piniaPluginPersistedstate.cookies(),
    },
  }
);

export default useThemeStore;
