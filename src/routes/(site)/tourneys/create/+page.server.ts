import { validate } from '$lib/utils';
import { error, fail } from '@sveltejs/kit';
import TourneysCreateInputSchema from '$prisma/inputTypeSchemas/TourneysCreateInputSchema';

export const actions = {
	default: async ({ locals, request }) => {
		const formData = await request.formData()
        const session = await locals.auth()
        const { errors, data } = validate(TourneysCreateInputSchema, formData)

        if (errors) {
            return fail(400, errors)
        }

        if(!session || !session.user || !session.user.email) {
            return error(403, { message: 'You are not authorized to do this.' })
        }

        const tournament = await locals.prisma.tourneys.create({
            data: {
                name: data.name,
                startDate: data.startDate,
                endDate: data.endDate,
                registrationsOpen: data.registrationsOpen,
                description: data.description,
                rules: data.rules,
                type: data.type,
                createdBy: {
                    connect: {
                        email: session.user.email
                    }
                }
            }
        })

        return {
            ...tournament
        }
	},
}