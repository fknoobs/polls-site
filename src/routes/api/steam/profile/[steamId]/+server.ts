import { PUBLIC_RELIC_API_LINK } from "$env/static/public"
import { error, json } from "@sveltejs/kit"
import { Agent, setGlobalDispatcher } from "undici"

export const GET = async ({ locals, params }) => {
    const profile = await locals.services.steam().getProfileBySteamId(params.steamId)

    if (!profile) {
        return error(404)
    }

    return json(profile)
}