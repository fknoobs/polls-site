<script lang="ts">
    import { classNames as classes } from "$lib/utils";
    import { onMount, type Snippet } from "svelte";

    type Props = {
        classNames?: string
        variant: 'danger' | 'warning' | 'success' | 'info'
        children: Snippet
        autoHide?: boolean
        reference?: HTMLDivElement
    }
    
    let {
        classNames,
        variant,
        children,
        autoHide = false,
        reference = $bindable()
    }: Props = $props()

    onMount(() => {
        let timeout;

        if (autoHide) {
            timeout = setTimeout(() => reference?.remove(), 3000)
        }
    })
</script>
<div
    bind:this={reference}
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