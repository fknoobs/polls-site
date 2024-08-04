<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { HTMLInputAttributes } from "svelte/elements";
    import type { ZodIssue } from "zod";

    type Props = {
        label: string
        value?: string
        name: string
        error?: ZodIssue | null
    } & HTMLInputAttributes

    let {
        label,
        name,
        value = $bindable(),
        error = $bindable(null),
        checked = $bindable(false)
    }: Props = $props()
</script>
<label for={name} class="flex items-center">
    <input
        bind:checked
        class="hidden peer"
        type="checkbox"
        id={name}
        {value}
        {name}
    />
    <label 
        for={name}
        class={classNames(
            'relative cursor-pointer',
            'flex items-center gap-3',
            'before:flex before:justify-center before:items-center',
            'before:w-5 before:h-5 before:block',
            'before:border before:border-black',
            'peer-[:checked]:before:bg-primary-100',
            'peer-[:checked]:before:content-["✓"]'
        )}
    >{label}</label>
</label>
{#if error}
    <span class="mt-2 block font-bold text-red-400 text-sm uppercase">{error.message}</span>
{/if}
