<script lang="ts">
    import Box from '$lib/components/Box.svelte';
	import { page } from '$app/stores';
</script>
<Box>
    <header>
        <h1 class="text-3xl font-bold mb-2">{$page.status}</h1>
        <span class="block mb-5 font-bold">{$page.error?.message}</span>
        <p>There is nothing here yet, I am still working on these pages.</p>
    </header>
</Box>