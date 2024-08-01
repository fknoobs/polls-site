import slugify from 'slugify'
import fs from 'fs';

export const actions = {
	default: async ({ locals, request }) => {
		const data = await request.formData()
        // const name = data.get('name') as string
        // const date = new Date(data.get('date') as string)
        // const description = data.get('description') as string

        // const tourney = await locals.prisma.tourneys.create({
        //     data: {
        //         name,
        //         slug: slugify(name, { lower: true }),
        //         startDate: date,
        //         description
        //     }
        // })

        // return {
        //     ...tourney
        // }
	},
}