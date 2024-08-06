<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import EnterTourneyForm from "$lib/components/forms/EnterTourneyForm.svelte";

    const { data } = $props()
</script>
<Box title="Enter tournament" description="Fill in the form below to enter.">
    <EnterTourneyForm tournament={data.tourney} />
</Box>