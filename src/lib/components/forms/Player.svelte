<script lang="ts">
    import { getRelicProfileBySteamId } from "$lib/client/services/coh.js";
    import Input from "$lib/components/Input.svelte";
    import PlayerCard from "$lib/components/cards/PlayerCard.svelte";

    type Props = {
        player?: Player | null
        steamId?: string
        fetchingProfile?: boolean
    }

    let {
        player = $bindable(null),
        steamId = $bindable(''),
        fetchingProfile = $bindable(false)
    }: Props = $props()

    let fetchProfile = async () => {
        fetchingProfile = true

        if (steamId.length < 17) {
            player = null
            fetchingProfile = false
            return
        }

        player = await getRelicProfileBySteamId(steamId)
        fetchingProfile = false
    }
</script>
{#if player}
    <div class="mb-4">
        <PlayerCard {player} variant="tetriary" />
        <input type="hidden" name="profile" value={JSON.stringify(player)} />
    </div>
{/if}
<div class="mb-3">
    <Input
        bind:value={steamId}
        label="Steam ID"
        name="steamId"
        placeholder="76561198036527204"
        type="text"
        oninput={fetchProfile}
        processing={fetchingProfile}
        required
    />
</div>