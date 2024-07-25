import { pb } from "$lib"

export const getPoll = async (slug: string) => {
    const poll = await pb.collection('poll').getFirstListItem(`slug="${slug}"`)
    const options = await pb.collection('poll_options').getFullList({
        filter: `poll="${poll.id}"`
    })
    const votes = await pb.collection('poll_votes').getFullList({
        filter: `poll="${poll.id}"`
    })

    return {
        ...poll,
        options,
        votes
    }
}

export const didVote = async (userId: string) => {
    try {
        await pb.collection('poll_votes').getFirstListItem(`user_id="${userId}"`)

        return true 
    } catch(_) {
        return false
    }
}