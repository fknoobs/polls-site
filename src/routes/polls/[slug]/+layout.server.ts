import { getPoll } from "$lib/poll"

export const load = async ({ locals, params }) => {
    const poll = await getPoll(params.slug)

    return {
        poll
    }
}