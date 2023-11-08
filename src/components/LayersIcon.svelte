<script>
  import {usePrefixClass} from "../common";

  import '../style/index.css'

  const iconClass = usePrefixClass('icon')

  export let className = ''
  export let style = ''
</script>

<svg
  class="{iconClass} {className}"
  {style}
  on:click
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path
    fill="currentColor"
    d="M12 1.92l10.1 4.2L12 10.33 1.9 6.13 12 1.91zm-4.9 4.2L12 8.17l4.9-2.05L12 4.08 7.1 6.12zM2 9.98l10 4.3 10-4.3v2.18l-9.6 4.14-.4.17-.4-.17L2 12.16V9.98zm0 6l10 4.3 10-4.3v2.18l-9.6 4.14-.4.17-.4-.17L2 18.16v-2.18z"
  />
</svg>