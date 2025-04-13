import { error, json } from "@sveltejs/kit"

export const GET = async ({ locals, params }) => {
    const profile = await locals.services.relic().getProfileBySteamId(params.steamId)

    if (!profile) {
        return error(404)
    }

    return json(profile)
}