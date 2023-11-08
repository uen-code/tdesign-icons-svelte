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
    d="M11.5 1.19l10.5.8.81 10.51-10.93 10.93L.56 12.13 11.5 1.18zm.76 2.06l-8.87 8.87 8.49 8.49 8.87-8.87-.61-7.88-7.88-.6zm3.86 4.63a1 1 0 10-1.41 1.41 1 1 0 001.41-1.41zm-2.83-1.42a3 3 0 114.24 4.25 3 3 0 01-4.24-4.25z"
  />
</svg>