import { didVote } from "$lib/poll"
import { redirect } from "@sveltejs/kit"

export const actions = {
	vote: async ({ locals, request, getClientAddress, platform }) => {
		const data = await request.formData()
        const ids = data.getAll('map') as string[]
        const userId = data.get('userId') as string

        /**
         * If user already voted, remove all his votes first
         */
        if (await didVote(userId)) {
            const votes = await locals.pocketbase.collection('poll_votes').getFullList({
                filter: `user_id="${userId}"`,
                fields: 'id'
            })
            
            await Promise.all(votes.map(async vote => await locals.pocketbase.collection('poll_votes').delete(vote.id)))
        }

        const promises = ids.map(async id => {
            return await locals.pocketbase.collection('poll_votes').create({
                poll: data.get('poll'),
                poll_option: id,
                user_id: data.get('userId')
            })
        })

        await Promise.all(promises)
        
        const poll = await locals.pocketbase.collection('poll').update(data.get('poll') as string, {
            updated: new Date()
        })

        return redirect(300, `/polls/${poll.slug}/result`)
	},
}