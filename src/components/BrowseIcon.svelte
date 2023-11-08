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
  <g clip-path="url(#clip0_8726_7319)">
    <path
      fill="currentColor"
      d="M2.1 12a10.5 10.5 0 0019.8 0 10.5 10.5 0 00-19.8 0zm-2.01-.3a12.5 12.5 0 0123.82 0l.1.3-.1.3a12.5 12.5 0 01-23.82 0l-.1-.3.1-.3zM12 9a3 3 0 100 6 3 3 0 000-6zm-5 3a5 5 0 1110 0 5 5 0 01-10 0z"
    />
  </g>
</svg>