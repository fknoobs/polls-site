<script lang="ts">
    import { getRelicProfileBySteamId } from "$lib/client/services/coh.js";
    import Input from "$lib/components/Input.svelte";
    import Select from "../Select.svelte";
    import PlayerCard from "$lib/components/cards/PlayerCard.svelte";

    type Props = {
        player?: Player | null
        steamId?: string
        timezone?: string
        timezones: string[]
    }

    let {
        player = $bindable(null),
        steamId = $bindable(''),
        timezone = $bindable('&nbsp;'),
        timezones
    }: Props = $props()
    
    let fetchingProfile = $state(false)

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
    <PlayerCard {player} />
    <input type="hidden" name="profile" value={JSON.stringify(player)} />
{/if}
<div class="mb-3">
    <Input
        bind:value={steamId}
        label="Steam ID"
        name="steam-id"
        placeholder="Eg: 76561198036527204"
        type="text"
        oninput={fetchProfile}
        valid={!!player}
        invalid={!player}
        processing={fetchingProfile}
        required
    />
</div>
<div class="mb-3">
    <Select
        bind:value={timezone}
        label="Timezone" 
        name="timezone" 
        options={timezones}
        required
        pattern="[A-z]/[A-z]"
    />
</div>