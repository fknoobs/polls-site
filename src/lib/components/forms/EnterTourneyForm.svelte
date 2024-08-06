<script lang="ts">
    import type { Prisma } from '@prisma/client'
    import Input from "../Input.svelte";
    import Select from '../Select.svelte';
    import Button from '../Button.svelte';
    import { enhance } from '$app/forms';
    import type { ZodIssue } from 'zod';
    import Form from './Form.svelte';
    import PlayerCard from '../cards/PlayerCard.svelte';
    import { getRelicProfileBySteamId } from '$lib/client/services/coh';
    import type { ActionResult } from '@sveltejs/kit';
    import Alert from '../Alert.svelte';

    type Props = {
        tournament: Prisma.TourneysGetPayload<{ include: { teams: true } }>
    }

    const {
        tournament
    }: Props = $props()

    let players = $state<{ player: Player | null, steamId: string | null, fetching: boolean }[]>([])
    let isSubmitting = $state(false)
    let inputErrors = $state<ValidationErrors<Prisma.TourneyTeamsGetPayload<{ include: { players: true } }>>>()
    let result = $state<ActionResult>()

    Array.from(Array(tournament.type).keys()).forEach(() => players.push({ player: null, steamId: null, fetching: false }))
</script>
{#if result?.type === 'success'}
    <Alert variant="success">
        Thanks for entering, click <a href={`/tourneys/${tournament.slug}#teams`} class="border-b border-black">here</a> to see all teams that entered.
    </Alert>
{:else}
    <Form
        bind:inputErrors
        bind:isSubmitting
        bind:result
    >
        <div class="mb-4">
            <Input
                name="name"
                label="Team name"
                placeholder="Give your team a name"
                error={inputErrors?.name}
            />
        </div>
        {#each players as player, index}
            <h4 class="mb-2 mt-8 text-xl font-bold">Player {index + 1}</h4>
            {#if player.player}
                <div class="my-4">
                    <PlayerCard player={player.player} variant="tetriary" />
                    <input type="hidden" name={`players[${index}][profile]`} value={JSON.stringify(player.player)} />
                </div>
            {/if}
            <div class="mb-4">
                <Input
                    bind:value={player.steamId}
                    name={`players[${index}][steamId]`}
                    label="steamId"
                    error={inputErrors?.players?.[index]?.steamId}
                    oninput={async () => {
                        player.fetching = false
                        player.player = null

                        if (!player.steamId) {
                            return
                        }

                        if (player.steamId.length < 17) {
                            player.player = null
                            return
                        }

                        player.fetching = true
                        player.player = await getRelicProfileBySteamId(player.steamId)
                        player.fetching = false
                    }}
                    processing={player.fetching}
                />
            </div>
            <div class="mb-4">
                <Select
                    label="Timezone" 
                    name={`players[${index}][timezone]`}
                    options={Intl.supportedValuesOf('timeZone')}
                    required
                    pattern="[A-z]/[A-z]"
                    error={inputErrors?.players?.[index]?.timezone}
                />
            </div>
        {/each}
        <div class="mt-6">
            <Button stretch variant="tetriary" loading={isSubmitting}>
                Enter
            </Button>
        </div>
    </Form>
{/if}