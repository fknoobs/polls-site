import { env  } from '$env/dynamic/private'
import { SvelteKitAuth, type SvelteKitAuthConfig } from '@auth/sveltekit'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Twitch from '@auth/sveltekit/providers/twitch'

export const { handle: auth, signIn, signOut } = SvelteKitAuth(async (event) => {
    const authOptions = {
        adapter: PrismaAdapter(event.locals.prisma),
    
        providers: [
            Twitch({
                clientId: env.TWITCH_CLIENT_ID,
                clientSecret: env.TWITCH_CLIENT_SECRET,
                async profile(profile) {
                    return {
                        id: profile.aud,
                        role: profile.role ?? "USER",
                        email: profile.email,
                        image: profile.picture,
                        name: profile.preferred_username,
                    }
                },
                allowDangerousEmailAccountLinking: true
            })
        ],
        secret: env.AUTH_SECRET,
        trustHost: true,
        callbacks: {
            async session({ session, token, user }) {
                const steam = await event.locals.prisma.steamProfile.findFirst({
                    where: {
                        userId: user.id
                    }
                })

                // @ts-ignore
                session.user.steam = steam

                return session
            }
        }
    } satisfies SvelteKitAuthConfig
    return authOptions
})