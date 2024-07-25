import { redirect, error } from "@sveltejs/kit"

export const actions = {
	vote: async ({ locals, request, getClientAddress, params }) => {
		const data = await request.formData()
        const fingerprint = data.get('fingerprint') as string
        const pollId = data.get('pollId') as string
        const ids = data.getAll('ids') as string[]
        
        if (!fingerprint) {
            return error(403, 'You are not allowed to vote, sorry.')
        }

        const votes = ids.map(id => {
            return {
                pollId: parseInt(pollId),
                optionId: parseInt(id),
                fingerprint: fingerprint,
            }
        })

        try {
            await locals.prisma.pollVotes.deleteMany({ where: { fingerprint } })
            await locals.prisma.pollVotes.createMany({
                data: votes
            })
        } catch(_) {
            return error(500, 'Failed to cast your vote, try again. If it keeps failing, contact @fknoobs on discord.')
        }

        return redirect(301, `/polls/${params.slug}/result`)
	},
}