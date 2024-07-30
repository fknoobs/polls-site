export const load = async ({ locals, params }) => {
    const poll = await locals.prisma.polls.findFirstOrThrow({
        where: {
            slug: params.slug
        },
        include: {
            options: {
                include: {
                    votes: true
                }
            },
            votes: true
        }
    })

    return {
        poll
    }
}