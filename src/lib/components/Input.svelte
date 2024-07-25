<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { HTMLInputAttributes } from "svelte/elements";

    type Props = {
        name: string
        label?: string
        value?: string
    } & HTMLInputAttributes

    let {
        label,
        name,
        value = $bindable(),
        ...rest
    }: Props = $props()
</script>
{#if label}
    <label for={name} class="mb-2 inline-block font-medium">{label}</label>
{/if}
<input 
    bind:value
    type="text"
    class={classNames(
        'px-4 py-3 block w-full outline-none transition-colors',
        'border border-dashed border-black',
    )}
    id={name}
    {name}
    {...rest}
/>