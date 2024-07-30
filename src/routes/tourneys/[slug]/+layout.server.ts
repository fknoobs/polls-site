export const load = async ({ locals, params }) => {
    const tourney = await locals.prisma.tourneys.findFirstOrThrow({
        where: {
            slug: params.slug
        },
        include: {
            teams: {
                include: {
                    players: true
                }
            }
        }
    })

    //console.log(tourney.teams[0].players)
    
    return {
        tourney,
        timezones: Intl.supportedValuesOf('timeZone')
    }
}