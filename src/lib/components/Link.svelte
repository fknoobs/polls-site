<script lang="ts">
    import type { Icon } from "lucide-svelte";
    import type { Snippet } from "svelte";
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import { classNames } from "$lib/utils";

    type Props = {
        children: Snippet
        before?: typeof Icon
        after?: typeof Icon
        variant?: 'primary' | 'black' | 'white'
    } & HTMLAnchorAttributes

    const {
        before,
        after,
        children,
        variant = 'primary',
        ...rest
    }: Props = $props()
</script>
<a
    class={classNames(
        'transition-transform',
        'flex gap-3 items-center',
        'font-bold',
        'hover:translate-x-1',
        (variant === 'primary') ? 'text-primary-800' : '',
        (variant === 'black') ? 'text-black' : '',
        (variant === 'white') ? 'text-white' : '',
    )}
    {...rest}
>
    {#if before}
        <svelte:component this={before} />
    {/if}
    {@render children()}
    {#if after}
        <svelte:component this={after} />
    {/if}
</a>