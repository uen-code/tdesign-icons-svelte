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
    d="M12 3a9 9 0 00-4.5 16.8l.87.5-1 1.73-.87-.5a11 11 0 018.95-19.98l.95.31-.63 1.9-.95-.3A9 9 0 0012 3zm8.98 1.41l-5.54 5.55a4 4 0 11-1.42-1.4l5.55-5.56 1.41 1.41zm1.16 3.2l.3.94a11 11 0 01-4.94 12.98l-.86.5-1-1.73.86-.5a9 9 0 004.05-10.62l-.31-.95 1.9-.63zM12 10a2 2 0 100 4 2 2 0 000-4z"
  />
</svg>
