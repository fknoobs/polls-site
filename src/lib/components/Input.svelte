<script lang="ts">
    import { classNames } from "$lib/utils";
    import LoaderCircle from 'lucide-svelte/icons/loader-circle'
    import type { HTMLInputAttributes } from "svelte/elements";
    import type { ZodIssue } from "zod";

    type Props = {
        name: string
        label?: string
        value?: string | Date | null
        error?: ZodIssue | null
        processing?: boolean
    } & HTMLInputAttributes

    let {
        label,
        name,
        value = $bindable(),
        error = $bindable(null),
        processing = $bindable(false),
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
    {#if processing}
        <LoaderCircle class="absolute right-4 top-3 text-black animate-spin" size="24" />
    {/if}
</div>