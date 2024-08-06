import { formData, validate } from '$lib/request.js'
import { TourneyTeamsCreateInputSchema, TourneyPlayersCreateManyInputSchema, TourneyPlayersCreateManyTeamInputSchema, TourneyPlayersCreateInputSchema } from '$prisma/inputTypeSchemas'

import { Prisma } from '@prisma/client'
import { error, redirect, isRedirect } from '@sveltejs/kit'
import { decode } from 'decode-formdata'
import { z } from 'zod'

export const actions = {
	default: async ({ locals, request, params }) => {
		const data = await formData(await request.formData()) as Prisma.TourneyTeamsGetPayload<{ include: { players: true } }>
        
        return await locals.services.tourneys().enter(params.slug, data.name, data.players)
	},
}