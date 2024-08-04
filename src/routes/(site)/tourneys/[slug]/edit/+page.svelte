<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import TournamentForm from "$lib/components/forms/TournamentForm.svelte";
    import Link from "$lib/components/Link.svelte";
    import MoveLeft from "lucide-svelte/icons/move-left";

    const { data } = $props()
</script>
<Box title={data.tourney.name} size="md">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys`} variant="black">Go back</Link>
        </div>
    {/snippet}
    <TournamentForm tournament={data.tourney} />
</Box>