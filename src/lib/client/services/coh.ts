export const getRelicProfileBySteamId = async (steamId: string): Promise<CoHPlayer & SteamPlayer | null> => {
    try {
        const fetchRelicProfile = await fetch(`/api/relic/profile/${steamId}`)
        const fetchSteamProifle = await fetch(`/api/steam/profile/${steamId}`)

        const [relicResponse, steamResponse] = await Promise.all([fetchRelicProfile, fetchSteamProifle])

        return {
            ...await relicResponse.json(),
            ...await steamResponse.json()
        }
    } catch(_) {
        return null
    }
}