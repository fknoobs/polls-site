// export const csr = false

export const load = async ({ locals }) => {
    return {
        session: await locals.auth(),
        profile: await locals.services.user().getProfile()
    }
}