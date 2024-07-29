<script lang="ts">
    import type { HTMLInputAttributes, HTMLSelectAttributes } from "svelte/elements";
    import { classNames } from "$lib/utils";
    import Input from "./Input.svelte";
    import { ChevronDown, ChevronUp } from "lucide-svelte";
    import { onMount } from "svelte";

    type Props = {
        value?: string
        label: string
        options: string[]
        name: string
    } & HTMLInputAttributes

    let {
        value = $bindable('&nbsp;'),
        options = $bindable([]),
        label,
        name,
        ...rest
    }: Props = $props()

    let reference = $state<HTMLElement>()
    let showDropdown = $state(false)
    let optionsFallback = $state(options)
    let searchString = $state('')
    let skipCheck = $state(false)

    const onClickOutside = (e: MouseEvent) => {
        if (skipCheck) {
            return
        }

        const target = (e.target as HTMLElement)

        if (!reference?.contains(target)) {
            showDropdown = false
        }
    }

    onMount(() => {
        document.addEventListener('click', onClickOutside)

        return () => {
            document.removeEventListener('click', onClickOutside)
        }
    })
</script>
<div class="relative" bind:this={reference}>
    <Input
        type="hidden"
        bind:value
        {label}
        {name}
        {...rest}
    />
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div 
        class={classNames(
            'px-4 py-3 block w-full outline-none transition-colors',
            'border border-dashed border-black flex cursor-pointer',
        )}
        onclick={() => showDropdown = !showDropdown}
    >
        {@html value}
        {#if showDropdown}
            <ChevronUp 
                class="ms-auto" 
                onclick={() => {
                    skipCheck = true

                    setTimeout(() => {
                        skipCheck = false
                    })
                }}
            />
        {:else}
            <ChevronDown 
                class="ms-auto" 
                onclick={() => {
                    skipCheck = true

                    setTimeout(() => {
                        skipCheck = false
                    })
                }}
            />
        {/if}
    </div>
    <div 
        class="bg-white absolute w-full flex flex-col shadow-lg shadow-[rgba(0,0,0,.2)] z-50"
        class:hidden={!showDropdown}
        class:block={showDropdown}
    >
        <input
            bind:value={searchString}
            type="text" 
            placeholder="Search.." 
            class="p-4 border-b border-slate-300 outline-none"
            oninput={() => {
                options = optionsFallback
                options = options.filter(option => option.toLowerCase().includes(searchString.toLowerCase()))
            }}
        />
        <div class="flex flex-col max-h-[350px] overflow-auto">
            {#each options as option}
                <button
                    type="button"
                    class="p-3 px-4 w-full text-start hover:bg-primary-100"
                    class:bg-primary-100={value === option}
                    onclick={() => {
                        value = option 
                        showDropdown = !showDropdown
                    }}
                >{option}</button>
            {/each}
        </div>
    </div>
</div>