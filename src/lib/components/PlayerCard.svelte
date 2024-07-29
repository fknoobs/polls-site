<script lang="ts">
    import { hasFlag } from "country-flag-icons";

    type Props = {
        player: Player
    }

    const { player }: Props = $props()
</script>
<div class="mb-5 mt-5 flex items-center gap-4 border border-dashed border-black bg-primary-100">
    <div>
        <img src={player.avatarmedium} alt={player.name} />
    </div>
    <div class="flex flex-col gap-1 items-baseline">
        <a href={player.profileurl} target="_blank" class="font-bold text-xl border-b hover:border-black">{player.personaname}</a>
        <span>{player.steamid}</span>
    </div>
    <div class="ms-auto self-start">
        {#if hasFlag(player.country.toUpperCase())}
            <img 
                alt={player.country} 
                src="http://purecatamphetamine.github.io/country-flag-icons/3x2/{player.country.toUpperCase()}.svg"
                width="35"
                class="m-2"
            />
        {/if}
    </div>
</div>