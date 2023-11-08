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
    d="M12 3a9 9 0 00-7.23 14.37A5 5 0 019.5 14h5a5 5 0 014.73 3.37A9 9 0 0012 3zm5.5 16.12V19a3 3 0 00-3-3h-5a3 3 0 00-3 3v.12a8.96 8.96 0 0011 0zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm11-6a2.5 2.5 0 100 5 2.5 2.5 0 000-5zM7.5 8.5a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"
  />
</svg>