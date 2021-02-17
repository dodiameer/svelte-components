import defaultTheme from "../../theme.config"
export function getThemeConfig() {
  return window.SVELTE_THEME_CONFIG || defaultTheme
}