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
    d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm5-3h4v2H6V9zm8 0h4v2h-4V9zm2.72 4.78l-.25.97a4.16 4.16 0 01-1.62 2.47c-.8.56-1.79.78-2.85.78h-1v-2h1c.8 0 1.34-.17 1.71-.42.35-.25.65-.65.82-1.33l.25-.97 1.94.5z"
  />
</svg>
