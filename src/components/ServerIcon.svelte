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
    d="M22 13v9H2v-9h20zm-2 2H4v5h16v-5zm2-13v9H2V2h20zm-2 2H4v5h16V4zM7.5 16.5v2h-2v-2h2zm0-11v2h-2v-2h2z"
  />
</svg>