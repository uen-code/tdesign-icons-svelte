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
    d="M12 23a11 11 0 100-22 11 11 0 000 22zm-.17-11.11c.43-.53.97-.97 1.4-1.32A2 2 0 0012 7a2 2 0 00-1.89 1.33l-.33.95L7.9 8.6l.34-.94a4 4 0 116.24 4.47 7 7 0 00-1.1 1.01c-.27.34-.37.61-.37.85v1.25h-2V14c0-.87.39-1.57.83-2.11zM11 18.25v-2h2v2h-2z"/>
</svg>