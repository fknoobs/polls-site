<script lang="ts">
    import Box from "$lib/components/Box.svelte";
    import Player from "$lib/components/forms/Player.svelte";
    import Button from "$lib/components/Button.svelte";
    import { enhance } from "$app/forms";
    import Input from "$lib/components/Input.svelte";
    
    const { data } = $props()

    let players = $state([1, 2])
    let isSubmitting = $state(false)
    let errorMessage = $state<string | null>(null)
</script>
<Box>
    <header class="mb-8">
        <h1 class="text-3xl font-bold mb-6">Register</h1>
        <p>Fill in the form below to participate in the tourney.</p>
    </header>
    {#if errorMessage}
        <div class="px-4 py-3 mb-8 bg-primary-200">
            {errorMessage}
        </div>
    {/if}
    <form 
        method="post" 
        use:enhance={({ formElement, formData, action, cancel, submitter }) => {
            errorMessage = null
            isSubmitting = true

            const timezones = formData.getAll('timezone') as string[]
            
            timezones.forEach(timezone => {
                if (false === /[A-z]\/[A-z]/.test(timezone)) {
                    errorMessage = 'Please select a valid timezone'
                    cancel()
                }
            })

            return async ({ result }) => {
                
            }
        }}
    >
        <div class="mb-8">
            <Input
                label="Team name"
                name="team-name"
            />
        </div>
        {#each players as index, i}
            <div class="mb-8">
                <h3 class="font-bold text-lg mb-3">Player {index}</h3>
                <Player timezones={data.timezones} />
            </div>
        {/each}
        <div>
            <Button loading={isSubmitting}>
                Submit
            </Button>
        </div>
    </form>
</Box>