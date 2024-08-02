<script lang="ts">
    import { classNames } from "$lib/utils";
    import { autoUpdate, computePosition, type Placement } from "@floating-ui/dom";
    import { onMount, type Snippet } from "svelte";

    type Props = {
        show?: boolean
        reference: HTMLElement
        placement?: Placement
        children: Snippet
    }

    let {
        show = $bindable(false),
        reference,
        placement = 'bottom-start',
        children
    }: Props = $props()

    let dropdown = $state<HTMLDivElement>()

    function updatePosition() {
        if (!dropdown) {
            return
        }

        computePosition(reference, dropdown, { placement }).then(({x, y}) => {
            Object.assign(dropdown!.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        });
    }

    const onClickOutside = (e: MouseEvent) => {        
        if (
            false === dropdown?.contains((e.target as HTMLElement))
            && false === reference?.contains((e.target as HTMLElement))
        ) {
            show = false
        }
    }

    onMount(() => {
        const cleanup = autoUpdate(
            reference,
            dropdown!,
            updatePosition  
        );

        return () => cleanup()
    })

    export const togglePopup = () => {
        show = !show
    }
</script>
<svelte:document onclick={onClickOutside} />
<div 
    bind:this={dropdown} 
    class={classNames(
        'absolute top-0 left-0',
        'bg-white shadow-[5px_5px_0px_3px] shadow-stone-900'
    )}
    class:hidden={!show}
    class:block={show}
>
    {@render children()}
</div>