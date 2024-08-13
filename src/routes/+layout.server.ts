import SteamAuth from 'node-steam-openid'
import { STEAM_REALM, STEAM_API_KEY } from '$env/static/private'
import type { Prisma } from '@prisma/client'

// export const csr = false

export const load = async ({ locals, request, url }) => {
    const steamSignIn = new SteamAuth({
        realm: STEAM_REALM,
        apiKey: STEAM_API_KEY,
        returnUrl: `${STEAM_REALM}/auth/steam`
    })
    const steamAuthUrl = await steamSignIn.getRedirectUrl()

    if (url.pathname.startsWith('/auth/steam')) {
        const steamUser = await steamSignIn.authenticate(request)
    }

    return {
        session: await locals.auth() as Session | null,
        steamAuthUrl
    }
}