import { json } from '@sveltejs/kit'

export const GET = async ({ locals }) => {
    const queue = await locals.services.ttsService().getQueue()

    return json(queue)
}