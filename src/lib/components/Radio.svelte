<script lang="ts">
    import type { HTMLInputAttributes } from 'svelte/elements'
    import { classNames } from '$lib/utils'
    import { uniqueId } from 'lodash-es'

    type Props = {
        label: string
        name: string
        group?: string | number
        value?: string | number
    } & HTMLInputAttributes

    let {
        name,
        label,
        value = $bindable(),
        group = $bindable(),
    }: Props = $props()

    const id = `${name}-${uniqueId()}`
</script>
<label
    for={id}
    class={classNames(
        'px-8 py-4',
        'd-flex items-center',
        'text-xl text-center',
        'border border-dashed border-stone-950',
        'has-[:checked]:bg-primary-100'
    )}
>
    <input 
        {value}
        bind:group
        type="radio"
        id={id}
        class="peer hidden"
        {name}
    />
    <label for={id} class="font-bold">{label}</label>
</label>