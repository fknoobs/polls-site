<script lang="ts">
    import { classNames } from "$lib/utils";
    import CheckCircle from 'lucide-svelte/icons/circle-check'
    import LoaderCircle from 'lucide-svelte/icons/loader-circle'
    import type { HTMLInputAttributes } from "svelte/elements";

    type Props = {
        name: string
        label?: string
        value?: string
        valid?: boolean
        invalid?: boolean
        processing?: boolean
    } & HTMLInputAttributes

    let {
        label,
        name,
        value = $bindable(),
        valid = $bindable(false),
        invalid = $bindable(false),
        processing = $bindable(false),
        ...rest
    }: Props = $props()
</script>
{#if label}
    <label for={name} class="mb-2 inline-block font-medium">{label}</label>
{/if}
<div class="relative flex items-center">
    <input 
        bind:value
        type="text"
        class={classNames(
            'px-4 py-3 block w-full outline-none transition-colors',
            'border border-dashed border-black',
            (!valid) ? 'focus:border-primary-500' : ''
        )}
        class:border-green-600={valid}
        class:border-red-500={invalid}
        id={name}
        {name}
        {...rest}
    />
    {#if valid}
        <CheckCircle class="absolute right-4 text-green-600" />
    {/if}
    {#if processing}
        <LoaderCircle class="absolute right-4 text-gray-400 animate-spin" size="24" />
    {/if}
</div>