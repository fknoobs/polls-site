import SteamAuth from 'node-steam-openid'
import type { Prisma } from '@prisma/client'

// export const csr = false

export const load = async ({ locals, request, url }) => {
    return {
        session: await locals.auth() as Session | null,
    }
}