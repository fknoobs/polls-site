export const load = async ({ locals, params }) => {
    const tourney = await locals.prisma.tourneys.findFirstOrThrow({
        where: {
            slug: params.slug
        }
    })
    
    return {
        tourney,
        timezones: Intl.supportedValuesOf('timeZone')
    }
}