<script lang="ts">
    import { getRelicProfileBySteamId } from "$lib/client/services/coh.js";
    import { hasFlag } from 'country-flag-icons'
    import Input from "$lib/components/Input.svelte";
    import Select from "../Select.svelte";

    let { timezones }: { timezones: string[] } = $props()
    let steamId = $state('');
    let fetchingProfile = $state(false)
    let profile = $state<CoHPlayer & SteamPlayer | null>(null);

    let fetchProfile = async () => {
        fetchingProfile = true

        if (steamId.length < 17) {
            profile = null
            fetchingProfile = false
            return
        }

        profile = await getRelicProfileBySteamId(steamId)
        fetchingProfile = false
    }
</script>
{#if profile}
    <div class="mb-5 mt-5 flex items-center gap-4 border border-dashed border-black bg-primary-100">
        <div>
            <img src={profile.avatarmedium} alt={profile.name} />
        </div>
        <div class="flex flex-col gap-1 items-baseline">
            <a href={profile.profileurl} target="_blank" class="font-bold text-xl border-b hover:border-black">{profile.personaname}</a>
            <span>{profile.steamid}</span>
        </div>
        <div class="ms-auto self-start">
            {#if hasFlag(profile.country.toUpperCase())}
                <img 
                    alt={profile.country} 
                    src="http://purecatamphetamine.github.io/country-flag-icons/3x2/{profile.country.toUpperCase()}.svg"
                    width="35"
                    class="m-2"
                />
            {/if}
        </div>
    </div>
    <input type="hidden" name="profile" value={JSON.stringify(profile)} />
{/if}
<div class="mb-3">
    <Input
        bind:value={steamId}
        label="Steam ID"
        name="steam-id"
        placeholder="Eg: 76561198036527204"
        type="text"
        oninput={fetchProfile}
        valid={!!profile}
        invalid={!profile}
        processing={fetchingProfile}
        required
    />
</div>
<div class="mb-3">
    <Select 
        label="Timezone" 
        name="timezone" 
        options={timezones}
        required
        pattern="[A-z]/[A-z]"
    />
</div>