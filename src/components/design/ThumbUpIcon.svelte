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
    d="M10.88 1.38l1.28.22a4 4 0 013.34 3.94V8h5.32a2 2 0 011.97 2.33l-1.66 10A2 2 0 0119.15 22H7V10.8l3.88-9.42zm1.23 2.26L9 11.2V20h10.15l1.67-10H13.5V5.54a2 2 0 00-1.39-1.9zM4 10v12H2V10h2z"
  />
</svg>
