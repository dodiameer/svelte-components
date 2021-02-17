<script>
  import { css } from "../actions/css";
  import { getCssProperties } from "../utils/getCssProperties";
  import { getThemeColor } from "../utils/getThemeColor";
  export let outlined = false;
  export let color = getThemeColor("primary", 500);
  export let textColor = "white";

  $: cssProperties = getCssProperties({ color, textColor, outlined });
</script>

<button use:css="{cssProperties}" on:click {...$$restProps}>
  <slot />
</button>

<style>
  button {
    color: var(--js-color);
    background: var(--js-background);
    border: 1px solid var(--js-border-color);
    border-radius: 6px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  button:hover,
  button:focus {
    filter: brightness(120%);
  }
  button:active {
    filter: brightness(75%);
  }
  button:focus {
    outline: 1px dashed black;
  }
  button:disabled {
    background: grey;
    border-color: grey;
    color: white;
    cursor: not-allowed;
  }
</style>
