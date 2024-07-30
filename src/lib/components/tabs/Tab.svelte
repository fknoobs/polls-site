<script lang="ts">
    import type { Snippet } from "svelte";
    import type { HTMLAttributes } from "svelte/elements";

    type Props = {
        title: string
        id: string
        children: Snippet
    } & HTMLAttributes<HTMLDivElement>

    let {
        title,
        id,
        children,
        ...rest
    }: Props = $props()
</script>
<div {id} data-tab data-tab-title={title} class="hidden" {...rest}>
    {@render children()}
</div>