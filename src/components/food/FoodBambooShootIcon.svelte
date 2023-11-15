<script>
  import { getClassString, getStyleString, SIZE, usePrefixClass } from '../../common';

  import '../../style/index.css';

  const COMPONENT_NAME = usePrefixClass('icon');

  export let size = undefined;
  export let color = undefined;

  $: initStyle = {
    style: $$props.style,
    fontSize: size ? (Number.isNaN(Number(size)) && !(size in SIZE) ? size : `${size}px`) : '',
    color: color,
  };
  $: iconClass = {
    [$$props.class]: $$props.class,
    [COMPONENT_NAME]: true,
    [SIZE[size]]: size in SIZE,
  };
</script>

<svg
  class={getClassString(iconClass)}
  style={getStyleString(initStyle)}
  on:click
  width="1em"
  height="1em"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill="currentColor"
    d="M19.84 4.23l-.2.03c-.78.15-1.86.4-3.19.87l.53 2.62.24 1.17 1.17.12a23.08 23.08 0 001.45-4.81zm-2.34 6.73l-1.24-.12L9.22 9.7l1.8 10.36a40.02 40.02 0 006.48-9.1zM9.03 20.3L7.29 10.27A47.33 47.33 0 003.1 13.9a18.1 18.1 0 005.93 6.38zm1.66-12.37l4.43.71-.1-.48-.46-2.27a32.47 32.47 0 00-3.87 2.04zM22 2.08l-.01 1.08a5.03 5.03 0 01-.04.53c-.04.36-.11.87-.24 1.51a25.75 25.75 0 01-1.77 5.32c-1.53 3.41-4.2 7.72-8.85 12.37l-.48.48-.62-.27c-.94-.4-3.19-1.67-5.27-3.74a18.98 18.98 0 01-3.74-5.27l-.27-.62.48-.48a48.43 48.43 0 016.24-5.3c2.84-2.02 5.4-3.3 7.52-4.13 1.81-.7 3.3-1.07 4.33-1.26a14.43 14.43 0 011.65-.2l1.07-.02z"
  />
</svg>
