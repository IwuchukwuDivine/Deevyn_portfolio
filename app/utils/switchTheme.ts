export default (theme: string) => {
  document.body.className = "";
  document.body.classList.add(theme);
};
export const themes = [
  {
    name: "theme-default",
    color: "#ff4500",
  },
  {
    name: "theme-deep-space",
    color: "#00d9ff",
  },
  {
    name: "theme-cosmic-void",
    color: "#ff00ff",
  },
  {
    name: "theme-nebula-glow",
    color: "#b84dff",
  },
  {
    name: "theme-stellar-gold",
    color: "#ffd700",
  },
  {
    name: "theme-aurora-night",
    color: "#00ffaa",
  },
  {
    name: "theme-navy-pink",
    color: "#fc5185",
  },
  {
    name: "theme-warm-purple",
    color: "#d1512d",
  },
  {
    name: "theme-grey-red",
    color: "#d72323",
  },
];
