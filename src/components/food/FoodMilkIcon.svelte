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
    d="M17.85 1H6.15v3.59L4 9.49V23h16V9.49l-2.15-4.9V1zm-.92 6.48L18 9.9V21h-1.95V9.88l.88-2.4zm-2.88 3.22V21H6V10.7h8.05zm-7.52-2L7.8 5.8h7.62l-1.07 2.9H6.53zm1.62-4.9V3h7.7v.8h-7.7zM13 13h-1.43L10 14.58 8.42 13H7v6h2v-2.59l1 1 1-1V19h2v-6z"
  />
</svg>
