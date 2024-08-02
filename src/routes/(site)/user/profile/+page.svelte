<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import ProfileForm from "$lib/components/forms/ProfileForm.svelte";

    const { data } = $props()
</script>
<Box title="Profile">
    <ProfileForm />
</Box>