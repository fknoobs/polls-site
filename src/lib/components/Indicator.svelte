<script lang="ts">
    import { classNames as classes } from "$lib/utils";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        variant: 'danger' | 'warning' | 'success' | 'info'
        classNames?: string
    } & HTMLAttributes<HTMLSpanElement>

    const { 
        variant, 
        classNames,
        ...rest
    }: Props = $props()
</script>
<span
    class={classes(
        'inline-block',
        'w-5 h-5',
        'rounded-full',
        (variant === 'danger') ? 'bg-red-400' : '',
        (variant === 'warning') ? 'bg-orange-400' : '',
        (variant === 'success') ? 'bg-green-400' : '',
        (variant === 'info') ? 'bg-blue-400' : '',
        ' ' + classNames
    )}
    {...rest}
></span>