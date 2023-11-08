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
    d="M4.6 6.28a7.5 7.5 0 0114.8 0 6.5 6.5 0 011.06 12.01l-.9.46-.9-1.78.88-.46a4.5 4.5 0 00-1.23-8.44l-.77-.14-.05-.78a5.5 5.5 0 00-10.98 0l-.05.78-.77.14a4.5 4.5 0 00-1.23 8.44l.89.46-.91 1.78-.9-.46a6.5 6.5 0 011.06-12zm7.4 3.3L17.41 15 16 16.41l-3-3V23h-2v-9.59l-3 3L6.59 15 12 9.59z"
  />
</svg>