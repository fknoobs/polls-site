import type TourneysCreateInputSchema from '$prisma/inputTypeSchemas/TourneysCreateInputSchema';
import { redirect } from '@sveltejs/kit';
import { decode } from 'decode-formdata'

export const actions = {
	default: async ({ locals, request }) => {
        const formData = await request.formData()
        const parsedData = decode<typeof TourneysCreateInputSchema['_output']>(formData, {
            dates: ['startDate', 'endDate'],
            numbers: ['type'],
            booleans: ['registrationsOpen']
        })

        const response = await locals.services.tourneys().create(parsedData)

        if ('status' in response) {
            if (response.status > 400) {
                return response
            }

            return response
        }

        return redirect(301, `/tourneys/${response.slug}`)
	},
}