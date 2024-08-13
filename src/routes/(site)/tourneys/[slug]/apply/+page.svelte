<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import EnterTourneyForm from "$lib/components/forms/EnterTourneyForm.svelte";
    import Link from "$lib/components/Link.svelte";
    import MoveLeft from "lucide-svelte/icons/move-left";

    const { data } = $props()
</script>
<Box title="Enter tournament" description="Fill in the form below to enter.">
    {#snippet beforeTitle()}
        <div class="mb-8">
            <Link before={MoveLeft} href={`/tourneys/${data.tourney.slug}`} variant="black">Go back</Link>
        </div>
    {/snippet}
    <EnterTourneyForm tournament={data.tourney} />
</Box>