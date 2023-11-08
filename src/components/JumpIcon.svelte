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
    d="M3 21V3h7.1v2H5v14h14v-5.1h2V21H3zm7.59-9l7-7H13V3h8v8h-2V6.41l-7 7L10.59 12z"
  />
</svg>