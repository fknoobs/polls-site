<script lang="ts">
    import { classNames } from "$lib/utils";
import { hasFlag } from "country-flag-icons";

    type Props = {
        variant?: 'primary' | 'secondary' | 'tetriary'
        player: Player
    }
    
    const { player, variant = 'primary' }: Props = $props()
    
    const getCountryCode = (player: Player) => {
        if (player.country) {
            return player.country.toUpperCase()
        }

        return player.loccountrycode!.toUpperCase()
    }
</script>
<div 
    class={classNames(
        'player-card',
        'flex items-center gap-4',
        (variant === 'primary') ? 'border border-dashed border-black bg-primary-100' : '',
        (variant === 'secondary') ? 'border border-dashed border-black bg-transparent' : '',
        (variant === 'tetriary') ? 'bg-transparent' : '',
    )}
>
    <div class="min-w-14">
        <img src={player.avatarmedium} alt={player.name} width="55" />
    </div>
    <div class="flex flex-col gap-1 items-baseline">
        <a href={`https://playercard.cohstats.com/?steamid=${player.steamid}`} target="_blank" class="font-bold text-xl border-b border-transparent hover:border-black text-ellipsis text-nowrap w-44">{player.personaname}</a>
        <span>{player.steamid}</span>
    </div>
    <div class="ms-auto self-start">
        {#if hasFlag(player.country.toUpperCase())}
            <img 
                alt={player.country} 
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/{getCountryCode(player)}.svg"
                width="35"
                class="m-2"
            />
        {/if}
    </div>
</div>