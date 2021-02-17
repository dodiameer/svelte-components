/**
   * @returns {import("../../types/GetCssProperties").CssProperties}
   */
export function getCssProperties({ color, textColor, outlined }) {
  if (outlined) {
    return {
      background: "transparent",
      color: color,
      "border-color": color,
    }
  } else {
    return {
      background: color,
      color: textColor,
      "border-color": color
    }
  }
}