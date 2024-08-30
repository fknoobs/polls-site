export const load = async ({ locals, params }) => {
    const poll = await locals.prisma.polls.findFirstOrThrow({
        where: {
            slug: params.slug
        },
        include: {
            options: {
                include: {
                    votes: true
                },
                take: 500
            },
            votes: {
                take: 500
            }
        },
    })

    return {
        poll
    }
}