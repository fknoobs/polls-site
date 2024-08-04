<script lang="ts">
    import Box from "$lib/components/Box.svelte"
    import ProfileForm from "$lib/components/forms/ProfileForm.svelte"
    import Alert from '$lib/components/Alert.svelte'

    const { data } = $props()
</script>
<Box title="Steam" description="Link your steam profile">
    {#if !data.session?.user?.steam?.steamId}
        <Alert variant="warning" classNames="mb-4">You have to link you steam profile.</Alert>
    {/if}
    <ProfileForm profile={data.session?.user.steam} />
</Box>