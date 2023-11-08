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
    d="M12 3.82a6.23 6.23 0 018.51 9.09l-5.22 5.22L12 21.42l-7.28-7.28L3.5 12.9A6.23 6.23 0 0112 3.82zM15.3 15.3l3.8-3.8a4.23 4.23 0 10-5.97-5.99L12 6.63 10.88 5.5a4.23 4.23 0 10-5.98 5.98l1.23 1.23L12 18.6l3.28-3.29z"
  />
</svg>