import type { SteamProfileCreateInputSchema } from '$prisma/index.js'
import { error, fail, redirect } from '@sveltejs/kit'
import { decode } from 'decode-formdata'

export const load = async ({ locals }) => {
    const session = await locals.auth()

    if (!session || !session.user) {
        redirect(301, '/')
    }

    const profile = await locals.services.user().getProfile(session.user.id!)

    return {
        profile
    }
}

export const actions = {
    default: async ({ locals, request }) => {
        const session = await locals.auth()

        if (!session || !session.user) {
            fail(403, { statusText: 'You are not authorized' })
        }

        const formData = await request.formData()
        const parsedData = decode<typeof SteamProfileCreateInputSchema['_output']>(formData)

        const response = await locals.services.user().updateProfile(parsedData, session?.user?.id!)

        if ('status' in response) {
            if (response.status > 400) {
                return response
            }

            return response
        }

        return redirect(301, '/')
	},
}