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
    d="M1 12a3.5 3.5 0 016.86-1h.78a3.5 3.5 0 016.72 0h.78a3.5 3.5 0 110 2h-.78a3.5 3.5 0 01-6.72 0h-.78A3.5 3.5 0 011 12zm3.5-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7.5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
  />
</svg>
