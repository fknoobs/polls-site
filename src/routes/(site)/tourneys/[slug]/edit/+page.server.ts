import type TourneysCreateInputSchema from '$prisma/inputTypeSchemas/TourneysCreateInputSchema';
import { decode } from 'decode-formdata'

export const actions = {
	default: async ({ locals, request, params }) => {
        const formData = await request.formData()
        const parsedData = decode<typeof TourneysCreateInputSchema['_output']>(formData, {
            dates: ['startDate', 'endDate'],
            numbers: ['type'],
            booleans: ['registrationsOpen']
        })
        
        return await locals.services.tourneys().update(params.slug, parsedData)
	},
}