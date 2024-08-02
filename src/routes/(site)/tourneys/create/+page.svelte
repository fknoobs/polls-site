<script lang="ts">
    import Box from '$lib/components/Box.svelte'
    import Link from '$lib/components/Link.svelte'
    import MoveLeft from 'lucide-svelte/icons/move-left'
    import TournamentForm from '$lib/components/forms/TournamentForm.svelte';
</script>
<Box title="Create a tournament" size="md">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys`} variant="black">Go back</Link>
        </div>
    {/snippet}
    <TournamentForm />
</Box>