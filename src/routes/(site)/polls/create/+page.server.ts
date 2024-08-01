import { error, redirect } from "@sveltejs/kit"

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData()
        const title = data.get('title') as string
        const description = data.get('description') as string
        const options = data.getAll('options') as string[]
        const mutliple = !!data.get('multiple')
        const minChoices = data.get('minChoices') ? parseInt(data.get('minChoices') as string) : undefined
        const maxChoices = data.get('maxChoices') ? parseInt(data.get('maxChoices') as string) : undefined

        const poll = await locals.services.pollService().createPoll(
            title,
            description,
            options,
            mutliple,
            minChoices,
            maxChoices
        )

        redirect(302, `/polls/${poll.slug}`)
	},
}