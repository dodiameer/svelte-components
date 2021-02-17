import { getThemeConfig } from "./getThemeConfig"

/**
 * Helper function to get theme color
 * @param {string} color Primary, secondary or any other key in ThemeConfig
 * @param {number | string} shade Shade number
 * @returns {import("../../types/ThemeConfig").ColorConfig["500"] | undefined} Required shade
 */
export function getThemeColor(color, shade) {
  const ThemeConfig = getThemeConfig()
  if (typeof shade === "number") {
    shade = `${shade}`
  }

  return ThemeConfig.colors?.[color]?.[shade] ?? undefined
}
