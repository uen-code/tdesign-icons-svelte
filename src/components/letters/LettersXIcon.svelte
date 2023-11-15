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
    d="M16.5 8.45a2 2 0 00.5-1.33V4h-2v3.12l-3 3.37-3-3.37V4H7v3.12a2 2 0 00.5 1.33L10.67 12l-3.15 3.55A2 2 0 007 16.88V20h2v-3.12l3-3.37 3 3.37V20h2v-3.12a2 2 0 00-.5-1.33L13.33 12l3.15-3.55z"
  />
</svg>
