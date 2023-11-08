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
    d="M16 1.04a4 4 0 11-.86 6.26l-6.28 3.63a3.98 3.98 0 010 2.14l6.28 3.63a4 4 0 11-1 1.73L7.86 14.8a4 4 0 110-5.6l6.28-3.63a4 4 0 011.85-4.53zm3.72 2.46a2 2 0 10-3.46 2 2 2 0 003.46-2zM3.07 12.53a2 2 0 103.86-1.06 2 2 0 00-3.86 1.06zM19 17.77a2 2 0 10-2 3.46 2 2 0 002-3.46z"
  />
</svg>