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
    d="M5.5 7.5a6.5 6.5 0 0113 0V9h2v13h-17V9h2V7.5zm2 1.5h9V7.5a4.5 4.5 0 10-9 0V9zm-2 2v9h13v-9h-13zM9 14.5h6v2H9v-2z"
  />
</svg>