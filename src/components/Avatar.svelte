<script>
  import { css } from "../actions/css";

  import { getThemeColor } from "../utils/getThemeColor";
  export let src;
  export let alt = "Avatar Image";
  export let color;
  $: !color && getThemeColor("primary", 500).then((val) => (color = val));
</script>

<img
  src="{src}"
  alt="{alt}"
  use:css="{{ 'border-color': color }}"
  {...$$restProps} />

<style>
  img {
    border: 2px solid var(--js-border-color);
    border-radius: 9999px;
    min-width: 10rem;
    width: 50%;
    max-width: 14rem;
  }
</style>
