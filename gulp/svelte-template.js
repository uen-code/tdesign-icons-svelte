function svelteTemplate(attrs, content){
    return `<script>
      import { getClassString, getStyleString, SIZE, processSize } from '../common';
    
      import '../index.css';
    
      const DEFAULT_CLASS = '${attrs.class}';
    
      // 'small' | 'medium' | 'large' | number | string
      export let size = 'medium';
      export let color;      
    
      $: initStyle = {
        style: $$props.style,
        fontSize: size ? processSize(size) : '',
        color: color,
      };
      $: iconClass = {
        [$$props.class]: $$props.class,
        [DEFAULT_CLASS]: true,
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
    ${content.join('')}
    </svg>`;
}
module.exports =  svelteTemplate
