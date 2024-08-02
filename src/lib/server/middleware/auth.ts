import { AUTH_SECRET, TWITCH_CLIENT_ID, TWITCH_CLIENT_SECRET, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from '$env/static/private'
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Twitch from '@auth/sveltekit/providers/twitch'
import Google from '@auth/sveltekit/providers/google'

export const { handle: auth, signIn, signOut } = SvelteKitAuth(async (event) => {
    const authOptions = {
        adapter: PrismaAdapter(event.locals.prisma),
    
        providers: [
            Google({
                clientId: GOOGLE_CLIENT_ID,
                clientSecret: GOOGLE_CLIENT_SECRET
            }),
            Twitch({
                clientId: TWITCH_CLIENT_ID,
                clientSecret: TWITCH_CLIENT_SECRET,
            })
        ],
        secret: AUTH_SECRET,
        trustHost: true,
        callbacks: {
            async session({ session, token, user }) {
                return session
            }
        }
    } satisfies SvelteKitAuthConfig
    return authOptions
})