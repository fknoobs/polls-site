<script lang="ts">
    import { onMount } from 'svelte';
    import { fingerprint, session, steamAuthUrl } from '$lib/stores/user.svelte';
    
    import '../style.css'
    import 'highlight.js/styles/base16/github.min.css'

    const { data, children } = $props()

    onMount( async () => {
        const { getFingerprint } = await import('@thumbmarkjs/thumbmarkjs')

        fingerprint.value = await getFingerprint() as string
        session.value = data.session
        steamAuthUrl.value = data.steamAuthUrl
    })
</script>
<svelte:head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</svelte:head>
{@render children()}