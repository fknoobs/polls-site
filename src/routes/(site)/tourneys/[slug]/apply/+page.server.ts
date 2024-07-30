import { Prisma } from '@prisma/client'
import { error, redirect, isRedirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ locals, request, getClientAddress, params }) => {
		const data = await request.formData()

        const teamName = data.get('team-name') as string
        const profiles: Player[] = (data.getAll('profile') as string[]).map(profile => JSON.parse(profile))
        const timezones = data.getAll('timezone') as string[]

        const players = profiles.map((profile, index) => {
            return {
                ...profile,
                timezone: timezones[index]
            }
        })
        const tourney = await locals.prisma.tourneys.findFirst({
            where: {
                slug: params.slug
            }
        })

        if (!tourney) {
            return error(404, {
                message: 'Tourney does not exist'
            })
        }

        try {
            const team = await locals.prisma.tourneyTeams.create({
                data: {
                    name: teamName,
                    players: {
                        createMany: {
                            data: players.map(player => ({ player: JSON.stringify(player) }))
                        }
                    },
                    tourney: { connect: { id: tourney.id } }
                },
                include: {
                    players: true,
                    tourney: true
                }
            })

            return redirect(301, `/tourneys/${params.slug}/teams/${team.id}`)
        } catch(e) {
            if ((e instanceof Prisma.PrismaClientKnownRequestError)) {
                if (e.code === 'P2002') {
                    return error(400, {
                        message: 'Team with this name already exists, choose another name.'
                    })
                }
            }

            if (isRedirect(e)) {
                return redirect(e.status, e.location)
            }

            return error(400, {
                message: 'Sorry, something went wrong.'
            })
        }
	},
}