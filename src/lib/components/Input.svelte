<script lang="ts">
    import { classNames } from "$lib/utils";
    import CheckCircle from 'lucide-svelte/icons/circle-check'
    import LoaderCircle from 'lucide-svelte/icons/loader-circle'
    import type { HTMLInputAttributes } from "svelte/elements";
    import type { ZodIssue } from "zod";

    type Props = {
        name: string
        label?: string
        value?: string
        error?: ZodIssue | null
    } & HTMLInputAttributes

    let {
        label,
        name,
        value = $bindable(),
        error = $bindable(null),
        ...rest
    }: Props = $props()
</script>
{#if label}
    <label for={name} class="mb-2 inline-block font-medium">{label}</label>
{/if}
<div class="relative">
    <input 
        bind:value
        type="text"
        class={classNames(
            'px-4 py-3 block w-full outline-none transition-colors',
            'border border-dashed border-black',
            (!error) ? 'focus:border-primary-500' : ''
        )}
        class:border-red-500={error}
        id={name}
        {name}
        {...rest}
    />
    {#if error}
        <span class="mt-2 block font-bold text-red-400 text-sm uppercase">{error.message}</span>
    {/if}
</div>