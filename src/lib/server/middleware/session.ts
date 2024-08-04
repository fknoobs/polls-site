import { redirect, type Handle } from "@sveltejs/kit";
import { Services } from "../services";


export const session = (async ({ event, resolve }) => {
    const session = await event.locals.auth()
    event.locals.services = new Services(event.locals.prisma, session as Session | null)
    
    /**
     * Make sure we force the user to fill his profile
     */
    if (session) {
        const redirectPath = `/user/profile`

        // @ts-ignore
        if (!session.user!.steam && redirectPath !== event.url.pathname) {
            redirect(302, redirectPath)
        }
    }
    
    return await resolve(event)
}) satisfies Handle