import type { Prisma } from "@prisma/client";
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { Service } from "./service";
import { error, validate } from "$lib/request";
import TourneysCreateInputSchema from "$prisma/inputTypeSchemas/TourneysCreateInputSchema";
import { fail } from "@sveltejs/kit";
import slugify from "slugify";

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
            return fail(403, {
                statusText: 'You are not authorized.'
            })
        }

        if (errors) {
            return fail(400, errors)
        }

        try {
            return await this.prisma.tourneys.create({
                data: {
                    createdBy: { connect: { id: this.session.userId } },
                    slug: slugify(data.name, { lower: true, strict: true, remove: /[*+~.()'"!:@]/g }),
                    ...data
                }
            })
        } catch(e) {
            return error(e, tourneyData)
        }
    }
}