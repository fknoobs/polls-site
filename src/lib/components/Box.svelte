<script lang="ts">
    import { classNames } from "$lib/utils";
    import type { Snippet } from "svelte";

    type Props = {
        children: Snippet;
    }

    const { children }:Props = $props() 
</script>
<div class="flex h-screen w-screen justify-center items-center">
    <div
        class={classNames(
            'bg-white w-[500px] p-8',
            'shadow-drop'
        )}
    >
        {@render children()}
    </div>
</div>