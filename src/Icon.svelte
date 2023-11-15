<script>
  import { onMount } from 'svelte';

  let IconComponent;

  export let name = '';
  export let size = '';

  const assorted = {
    common: 'common',
    component: 'component',
    facial: 'facial',
    food: 'food',
    numbers: 'numbers',
    letters: 'letters',
  };

  const loadIconComponent = async (iconName) => {
    const path = Object.keys(assorted).find((key) => iconName.includes(assorted[key]));
    const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    let iconModule;
    if (path) {
      iconModule = await import(`./components/${path}/${formattedIconName}Icon.svelte`);
    } else {
      iconModule = await import(`./components/design/${formattedIconName}Icon.svelte`);
    }
    IconComponent = iconModule.default;
  };

  onMount(() => {
    loadIconComponent(name);
  });
</script>

<svelte:component this={IconComponent} {size} {...$$restProps} />
