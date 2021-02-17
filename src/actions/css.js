/**
 * @param {HTMLElement} node
 * @param {{ [key: string]: string; }} properties
 */
export function setProperties(node, properties) {
  Object.entries(properties).forEach(([key, value]) => {
    node.style.setProperty(`--js-${key}`, value)
  })
}

/**
 * @name CSSAction
 * @description Use Svelte variables as css variables
 * @example ```javascript
 * <div use:css={{ color: someColorVariable }}></div>
 * <style>
 * div {
 *  color: var(--js-color);
 * }
 * </style>
 * ```
 * @param {HTMLElement} node 
 * @param {{[key: string]: string}} properties 
 */
export function css(node, properties) {
  setProperties(node, properties)

  return {
    update(properties) {
      setProperties(node, properties)
    }
  }
}