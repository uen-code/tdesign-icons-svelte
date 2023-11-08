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
    d="M8.64 20.5a3.5 3.5 0 006.72 0H8.64zM3 19.5h18v-3l-2-3v-5a7 7 0 10-14 0v5l-2 3v3z"
  />
</svg>