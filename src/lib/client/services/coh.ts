export const getRelicProfileBySteamId = async (steamId: string): Promise<CoHPlayer & SteamPlayer | null> => {
    try {
        const requestRelic = await fetch(`/api/relic/profile/${steamId}`)
        const responseRelic = await requestRelic.json() as CoHPlayer | null

        const requestSteam = await fetch(`/api/steam/profile/${steamId}`)
        const responseSteam = await requestSteam.json() as SteamPlayer | null

        if (!responseRelic || !responseSteam) {
            return null
        }

        return {
            ...responseRelic,
            ...responseSteam
        }
    } catch(_) {
        return null
    }
}