<script lang="ts">
    import type { Prisma } from '@prisma/client'
    import { classNames } from '$lib/utils'
    import PlayerCard from './PlayerCard.svelte'

    type Props = Prisma.TourneyTeamsGetPayload<{ include: { players: true } }>
    
    const {
        name,
        players,
    }: Props = $props()

    const getPlayer = (player: string): Player => {
        return JSON.parse(player)
    }
</script>
<div 
    class={classNames(
        'bg-gray-300',
    )}
>
    <header class="px-4 py-3">
        <h3 class="font-bold text-lg text-primary-900">{name}</h3>
    </header>
    <section class="p-4 bg-gray-200">
        <div class="flex flex-col gap-2">
            {#each players as player}
                <PlayerCard player={getPlayer(player.player)} variant="tetriary" />
            {/each}
        </div>
    </section>
</div>