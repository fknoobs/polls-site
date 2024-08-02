<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";
    import Spinner from "./Spinner.svelte";

    type Props = {
        variant?: 'primary' | 'secondary' | 'tetriary'
        loading?: boolean
        stretch?: boolean
        children: Snippet
    } & HTMLButtonAttributes

    let {
        variant = 'primary',
        loading = $bindable(false),
        stretch = $bindable(false),
        children,
        ...rest
    }: Props = $props()
</script>
<button
    class={classNames(
        'flex justify-center items-center gap-2',
        'p-3 font-bold transition-colors',
        variant === 'primary' ? 
            'border-2 border-dashed border-black hover:bg-black hover:bg-opacity-20' : '',
        variant === 'tetriary' ? 
            'px-8 bg-stone-950 text-white hover:bg-opacity-80' : '',
        stretch ? 'w-full' : ''
    )}
    {...rest}
>
    {#if loading}
        <Spinner />
    {/if}
    {@render children()}
</button>