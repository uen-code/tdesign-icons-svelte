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
    d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12a11 11 0 1122 0 11 11 0 01-22 0zm6.62-4.86L11 9.04v1.46l-3.2 2.4-1.2-1.6 1.86-1.4-1.82-1.02.98-1.74zm9.74 1.74l-1.82 1.03 1.86 1.39-1.2 1.6-3.2-2.4V9.04l3.38-1.9.98 1.74zM12 11.26l.9 1.8c.37.75.85.98 1.18 1 .22.02.45-.03.67-.18l.83-.57 1.12 1.66-.82.56c-.36.24-.76.41-1.17.49-.18.44-.4.93-.67 1.38-.2.34-.44.7-.73.99-.26.26-.7.61-1.3.61-.61 0-1.06-.35-1.32-.61a4.9 4.9 0 01-.73-.99c-.26-.45-.49-.94-.67-1.38a3.1 3.1 0 01-1.16-.49l-.83-.56 1.12-1.66.83.57c.22.15.45.2.67.19.33-.03.8-.26 1.19-1.02l.9-1.79zm-.68 4.42a8.04 8.04 0 00.68 1.18 8.02 8.02 0 00.68-1.18c-.24-.14-.47-.3-.68-.5-.21.2-.44.36-.68.5z"
  />
</svg>
