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
    d="M12 4a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM6.5 7.5a5.5 5.5 0 1111 0 5.5 5.5 0 01-11 0zM3 19a5 5 0 015-5h8a5 5 0 015 5v3H3v-3zm5-3a3 3 0 00-3 3v1h14v-1a3 3 0 00-3-3H8z"
  />
</svg>