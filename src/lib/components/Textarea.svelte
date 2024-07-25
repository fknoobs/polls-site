<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { HTMLTextareaAttributes } from "svelte/elements";

    type Props = {
        name: string
        label: string
        value?: string
    } & HTMLTextareaAttributes

    let {
        label,
        name,
        value = $bindable(),
        ...rest
    }: Props = $props()
</script>
<label for={name} class="mb-2 inline-block font-medium">{label}</label>
<textarea
    class={classNames(
        'px-4 py-3 block w-full outline-none transition-colors',
        'border border-dashed border-black',
    )}
    id={name}
    {name}
    {...rest}
></textarea>