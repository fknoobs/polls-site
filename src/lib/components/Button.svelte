<script lang="ts">
    import { classNames as classes } from "$lib/utils";
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";
    import Spinner from "./Spinner.svelte";
    import { goto } from "$app/navigation";

    type Props = {
        variant?: 'primary' | 'secondary' | 'tetriary' | 'light'
        size?: 'sm' | 'md' | 'lg'
        classNames?: string
        href?: string
        loading?: boolean
        stretch?: boolean
        children: Snippet
    } & HTMLButtonAttributes

    let {
        variant = 'primary',
        size = 'md',
        classNames,
        href,
        loading = $bindable(false),
        stretch = $bindable(false),
        children,
        ...rest
    }: Props = $props()
</script>
<button
    class={classes(
        'flex justify-center items-center gap-2',
        'font-bold transition-colors',
        'disabled:bg-opacity-30 disabled:cursor-not-allowed',
        variant === 'primary' ? 
            'border-2 border-dashed border-black hover:bg-black hover:bg-opacity-20' : '',
        variant === 'tetriary' ? 
            'bg-stone-950 text-white hover:bg-opacity-80' : '',
        variant === 'light' ? 
            'bg-slate-300 hover:bg-opacity-80' : '',
        stretch ? 'w-full' : '',
        (size === 'sm') ? 'py-1 px-4' : '',
        (size === 'md') ? 'py-4 px-8' : '',
        (size === 'lg') ? 'py-4 px-8 text-xl' : '',
        ' ' + classNames
    )}
    onclick={() => {
        if (href) {
            goto(href)
        }
    }}
    {...rest}
>
    {#if loading}
        <Spinner />
    {/if}
    {@render children()}
</button>