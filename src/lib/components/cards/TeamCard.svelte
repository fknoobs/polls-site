<script lang="ts">
    import type { Prisma } from '@prisma/client'
    import { classNames } from '$lib/utils'
    import PlayerCard from './PlayerCard.svelte'

    type Props = Prisma.TourneyTeamsGetPayload<{ include: { players: true } }>
    
    const {
        name,
        players,
    }: Props = $props()

    const getPlayer = (player: Prisma.TourneyPlayersGetPayload<{ include: { team: false } }>): Player & { timezone: string } => {
        let profile: Player & { timezone: string }
        profile = JSON.parse(player.player)

        if (!profile.steamid) {
            profile = JSON.parse(player.profile)
            profile.timezone = player.timezone
        }

        return profile
    }
</script>
<div 
    class={classNames(
        'bg-gray-200',
    )}
>
    <header class="px-4 py-3 bg-gray-300">
        <h3 class="font-bold text-lg text-primary-900">{name}</h3>
    </header>
    <section class="p-4">
        <div class="flex flex-col gap-2">
            {#each players as player}
                <PlayerCard player={getPlayer(player)} variant="tetriary" />
            {/each}
        </div>
    </section>
</div>