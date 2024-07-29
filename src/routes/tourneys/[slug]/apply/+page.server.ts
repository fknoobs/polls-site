export const load = () => {
    return {
        timezones: Intl.supportedValuesOf('timeZone')
    }
}

export const actions = {
	default: async ({ locals, request, getClientAddress, params }) => {
		const data = await request.formData()
        const profiles: Player[] = (data.getAll('profile') as string[]).map(profile => JSON.parse(profile))

        console.log(profiles)
	},
}