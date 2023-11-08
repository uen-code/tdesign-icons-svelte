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
    d="M13.3 3.96a4.77 4.77 0 116.74 6.75l-3.03 3.03-1.41-1.42 3.03-3.03a2.77 2.77 0 10-3.92-3.92L11.68 8.4 10.26 7l3.03-3.03zM15.4 10L10 15.41 8.58 14 14 8.59 15.4 10zm-7 1.68L5.36 14.7a2.77 2.77 0 103.92 3.92l3.03-3.03L13.74 17l-3.03 3.03a4.77 4.77 0 11-6.75-6.75l3.03-3.03 1.41 1.42z"
  />
</svg>