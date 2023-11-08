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
    d="M12 1.2l10 8.33V22H2V9.53L12 1.2zM10 20h4v-5h-4v5zm6 0h4v-9.53L12 3.8l-8 6.67V20h4v-7h8v7z"
  />
</svg>