export const load = async ({ locals }) => {
    const upcomming = await locals.services.tourneys().upcomming()

    return {
        upcomming
    }
}