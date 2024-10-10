<script lang="ts">
    import { enhance } from "$app/forms";
    import { goto } from "$app/navigation";
    import Box from "$lib/components/Box.svelte";
    import Button from "$lib/components/Button.svelte";
    import PlayerForm from "$lib/components/forms/Player.svelte";
    import Input from "$lib/components/Input.svelte";

    const { data } = $props()
    const players = data.team.players.map(player => {
        let profile: Player & { timezone: string }
        profile = JSON.parse(player.player)

        if (!profile.steamid) {
            profile = JSON.parse(player.profile)
            profile.timezone = player.timezone
        }

        return profile
    })

    let isUpdated = $state(false)
    let isSubmitting = $state(false)
    let errorMessage = $state<string | null>(null)
</script>
<Box>
    <header class="mb-8">
        <h1 class="text-3xl font-bold mb-6">Team - {data.team.name}</h1>
        <p>Below players are registered in this team. If anything is incorrect, edit it or contact @fknoobscoh</p>
    </header>
    {#if errorMessage}
        <div class="px-4 py-3 mb-8 bg-primary-200">
            {errorMessage}
        </div>
    {/if}
    {#if isUpdated}
        <div class="px-4 py-3 mb-8 bg-green-200">
            Team updated
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
                if (result.type === 'error') {
                    errorMessage = result.error.message
                }

                if (result.type === 'success') {
                    isUpdated = true
                    isSubmitting = false
                }
            }
        }}
    >
        <div class="mb-8">
            <Input
                value={data.team.name}
                label="Team name"
                name="team-name"
                placeholder="Give your team a name"
                required
            />
        </div>
        {#each players as player, i}
            <h3 class="font-bold text-lg mb-3 mt-8">Player {i + 1}</h3>
            <PlayerForm timezone={player.timezone} {player} steamId={player.steamid} />
        {/each}
        <div class="mt-6">
            <Button loading={isSubmitting}>
                Update
            </Button>
        </div>
    </form>
</Box>