<script lang="ts">
    import { onMount } from 'svelte';
    import { fingerprint } from '$lib/stores/user';
    
    import '../style.css'
    import 'highlight.js/styles/base16/github.min.css'

    onMount( async () => {
        const { getFingerprint } = await import('@thumbmarkjs/thumbmarkjs')

        $fingerprint = await getFingerprint() as string
    })
</script>
<slot />