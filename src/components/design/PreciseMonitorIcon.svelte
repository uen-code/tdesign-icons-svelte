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
    d="M13 2v6h-2V2h2zm-9 .59L9.91 8.5 8.5 9.91 2.59 4 4 2.59zM21.41 4L15.5 9.91 14.09 8.5 20 2.59 21.41 4zm-11.14 7a2 2 0 110 2H2v-2h8.27zM16 11h6v2h-6v-2zm-6.09 4.5L4 21.41 2.59 20l5.91-5.91 1.41 1.41zm5.59-1.41L21.41 20 20 21.41l-5.91-5.91 1.41-1.41zM13 16v6h-2v-6h2z"
  />
</svg>
