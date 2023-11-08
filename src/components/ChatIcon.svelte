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
    d="M1.5 2h21v16H6.88L1.5 22.7V2zm2 2v14.3L6.12 16H20.5V4h-17z"
  />
</svg>