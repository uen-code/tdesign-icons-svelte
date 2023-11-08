<script>
  import {components} from "../index.js";

  /** icon name */
  export let name = '';
  /** icon class */
  export let className = '';
  /** icon style */
  export let style = '';
</script>

<svelte:component this={components[name]} className={className} {style}/>