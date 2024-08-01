<script lang="ts">
    import { classNames } from "$lib/utils";
    import { onMount, type Snippet } from "svelte";
    import X from 'lucide-svelte/icons/x'

    type Props = {
        reference?: HTMLDialogElement
        title?: string
        header?: Snippet
        children: Snippet,
        openModal?: () => void
        size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    }

    let {
        children,
        title,
        header,
        reference = $bindable(),
        size = 'md'
    }: Props = $props()

    export const openModal = () => {
        reference?.showModal()
    }
</script>
<dialog
    bind:this={reference}
    class={classNames(
        'backdrop:bg-stone-800 backdrop:bg-opacity-70',
        'shadow-drop',
        (size === 'sm') ? 'w-[300px]' : '',
        (size === 'md') ? 'w-[450px]' : '',
        (size === 'lg') ? 'w-[650px]' : '',
        (size === 'xl') ? 'w-[960px]' : '',
        (size === 'full') ? 'w-screen' : '',
    )}
>
    <header class="p-6">
        <div class="flex items-center">
            {#if title}
                <h6 class="font-bold text-3xl">{title}</h6>
            {/if}
            <button class="ms-auto outline-none" onclick={() => reference?.close()}>
                <X size="44" strokeWidth="1" />
            </button>
        </div>
        <div>
            {#if header}
                {@render header()}
            {/if}
        </div>
    </header>
    <section class="p-6">
        {@render children()}
    </section>
</dialog>