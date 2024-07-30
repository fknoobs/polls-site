<script lang="ts">
    import { classNames } from "$lib/utils";
import { onMount, type Snippet } from "svelte";

    type Props = {
        children: Snippet
    }

    let reference = $state<HTMLElement>()
    let tabs = $state<{ id: string, title: string, element: HTMLElement, active: boolean }[]>([])

    const { children }: Props = $props()

    onMount(() => {
        const tabElements = reference!.querySelectorAll('[data-tab]') as NodeListOf<HTMLElement>
        
        if (!tabElements) {
            return
        }

        tabElements.forEach((tab, i) => {
            if (i === 0 && !window.location.hash) {
                tab.classList.add('block')
                tab.classList.remove('hidden')
            }

            if (window.location.hash) {
                if (tab.id === window.location.hash.replace('#', '')) {
                    tab.classList.add('block')
                    tab.classList.remove('hidden')
                }
            }

            tabs.push({ 
                id: tab.id, 
                title: tab.dataset.tabTitle!, 
                element: tab,
                active: tab.classList.contains('block')
            })
        })
    })
</script>
<div bind:this={reference}>
    <div class="flex gap-2">
        {#each tabs as tab}
            <button 
                type="button" 
                role="tab"
                class={classNames(
                    'px-4 py-2',
                    'font-bold',
                    'border-b-2 border-gray-300',
                    (tab.active) ? 'bg-primary-100 border-primary-800' : ''
                )}
                onclick={() => {
                    tabs.forEach(tab => {
                        tab.active = false
                        tab.element.classList.add('hidden')
                    })

                    tab.active = true
                    tab.element.classList.remove('hidden')
                    tab.element.classList.add('block')
                }}
            >
                {tab.title}
            </button>
        {/each}
    </div>
    <div>
        {@render children()}
    </div>
</div>