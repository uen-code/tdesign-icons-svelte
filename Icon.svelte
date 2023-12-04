<script>
  import { onMount } from 'svelte';

  let IconComponent;

  export let name = '';
  export let size = '';

  const loadIconComponent = async (iconName) => {
    const formattedIconName = iconName.charAt(0).toUpperCase() + iconName.slice(1);
    const iconModule = await import(`./lib/${formattedIconName}Icon.svelte`);
    IconComponent = iconModule.default;
  };

  onMount(() => {
    loadIconComponent(name);
  });
</script>

<svelte:component this={IconComponent} {size} {...$$restProps} />
