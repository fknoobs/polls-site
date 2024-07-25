import { error, redirect } from "@sveltejs/kit"

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData()
        const title = data.get('title') as string
        const description = data.get('description') as string
        const options = data.getAll('options') as string[]

        const poll = await locals.services.pollService().createPoll(
            title,
            description,
            options
        )

        redirect(302, `/polls/${poll.slug}`)
	},
}