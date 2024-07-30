<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet
        title?: string | null
        description?: string | null
        afterTitle?: Snippet
        beforeTitle?: Snippet
        size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
    }

    const { 
        children, 
        title,
        description,
        size = 'sm',
        afterTitle,
        beforeTitle,
    }: Props = $props() 
</script>
<div class="flex justify-center">
    <div
        class={classNames(
            'bg-white p-8',
            'shadow-drop',
            (size === 'sm') ? 'w-[500px]' : '',
            (size === 'md') ? 'w-[650px]' : '',
            (size === 'lg') ? 'w-[800px]' : '',
            (size === 'xl') ? 'w-[1220px]' : '',
            (size === 'full') ? 'w-[calc(100%_-60px)]' : '',
        )}
    >
        {#if title}
            <header class="mb-8">
                {#if beforeTitle}
                    {@render beforeTitle()}
                {/if}
                <h1 class="text-3xl font-bold mb-4">{title}</h1>
                {#if description}
                    <p>{description}</p>
                {/if}
                {#if afterTitle}
                    {@render afterTitle()}
                {/if}
            </header>
        {/if}
        {@render children()}
    </div>
</div>