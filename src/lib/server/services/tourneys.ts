import type { Prisma } from "@prisma/client";
import { Service } from "./service";
import { attempt, error, validate } from "$lib/request";
import TourneysCreateInputSchema from "$prisma/inputTypeSchemas/TourneysCreateInputSchema";
import { fail } from "@sveltejs/kit";
import slugify from "slugify";
import { z } from "zod";

export class Tourneys extends Service {
    async upcomming() {
        return this.prisma.tourneys.findMany({
            where: {
                startDate: {
                    gt: new Date()
                }
            },
            include: {
                teams: true,
                createdBy: true
            }
        })
    }

    async current() {
        return this.prisma.tourneys.findMany({
            where: {
                startDate: {
                    gte: new Date()
                }
            }
        })
    }

    async getList(take = 25, skip = 0) {
        return await this.prisma.tourneys.findMany({
            take,
            skip,
            include: {
                teams: true
            }
        })
    }

    async create(
        tourneyData: Pick<
            Prisma.TourneysCreateInput, 
                'name' | 
                'startDate' | 
                'endDate' | 
                'description' | 
                'rules' |
                'type' |
                'registrationsOpen'
            >
    ) {
        const { data, errors } = await validate(TourneysCreateInputSchema, tourneyData)

        if (!this.session) {
            return fail(403, { statusText: 'You are not authorized.' })
        }

        if (errors) {
            return fail(400, errors)
        }

        return attempt(
            await this.prisma.tourneys.create,
            {
                data: {
                    createdBy: { connect: { id: this.session.userId } },
                    slug: slugify(data.name, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g }),
                    ...data
                }
            }
        )
    }

    /**
     * Update tournament details
     * 
     * @param slug 
     * @param tourneyData 
     * @returns 
     */
    async update(
        slug: string,
        tourneyData: Pick<
            Prisma.TourneysCreateInput, 
                'name' | 
                'startDate' | 
                'endDate' | 
                'description' | 
                'rules' |
                'type' |
                'registrationsOpen'
            >
    ) {
        const { data, errors } = await validate(TourneysCreateInputSchema, tourneyData)

        if (!this.session) {
            return fail(403, { statusText: 'You are not authorized.' })
        }

        if (errors) {
            return fail(400, errors)
        }

        return attempt(
            this.prisma.tourneys.update,
            {
                data: data,
                where: { slug }
            }
        )
    }

    /**
     * Adds new team to tournament
     * 
     * @param slug 
     * @param teamName 
     * @param players 
     */
    async enter(slug: string, teamName: string, players: Omit<Prisma.TourneyPlayersCreateInput, 'team'>[]) {
        const schema = z.object({
            name: z.string().min(1),
            players: z.object({
                steamId: z.string().min(16, { message: 'This is not a valid steam id' }),
                timezone: z.string().regex(/[A-z]\/[A-z](\/[A-z])?/),
                profile: z.string().min(1)
            }).array()
        })
        
        const { data, errors } = await validate(schema, { name: teamName, players })
        console.log(players)
        if (!this.session) {
            return fail(403, { statusText: 'You are not authorized.' })
        }

        if (errors) {
            return fail(400, errors)
        }

        return attempt(
            this.prisma.tourneyTeams.create,
            {
                data: {
                    name: data.name,
                    players: {
                        createMany: {
                            data: data.players
                        }
                    },
                    tourney: {
                        connect: { slug }
                    }
                }
            }
        )
    }
}