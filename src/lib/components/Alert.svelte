<script lang="ts">
    import { classNames as classes } from "$lib/utils";
    import type { Snippet } from "svelte";

    type Props = {
        classNames?: string
        variant: 'danger' | 'warning' | 'success' | 'info'
        children: Snippet
    }

    const {
        classNames,
        variant,
        children
    }: Props = $props()
</script>
<div
    class={classes(
        'py-3 px-4',
        (variant === 'danger') ? 'bg-red-300' : '',
        (variant === 'warning') ? 'bg-orange-200' : '',
        (variant === 'success') ? 'bg-green-300' : '',
        (variant === 'info') ? 'bg-primary-200' : '',
        ' ' + classNames
    )}
>
    {@render children()}
</div>