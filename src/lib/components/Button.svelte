<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { Snippet } from "svelte";
    import type { HTMLButtonAttributes } from "svelte/elements";
    import Spinner from "./Spinner.svelte";

    type Props = {
        variant?: 'primary' | 'secondary'
        loading?: boolean
        children: Snippet
    } & HTMLButtonAttributes

    let {
        variant = 'primary',
        loading = $bindable(false),
        children,
        ...rest
    }: Props = $props()
</script>
<button
    class={classNames(
        'flex justify-center items-center gap-2',
        'p-3 w-full font-bold transition-colors',
        variant === 'primary' ? 
            'border-2 border-dashed border-black hover:bg-black hover:bg-opacity-20' : ''
    )}
    {...rest}
>
    {#if loading}
        <Spinner />
    {/if}
    {@render children()}
</button>