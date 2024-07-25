import { json } from '@sveltejs/kit'

export const GET = async ({ locals, params }) => {
    const poll = await locals.services.pollService().getPoll(params.slug)
    
    return json(poll)
}