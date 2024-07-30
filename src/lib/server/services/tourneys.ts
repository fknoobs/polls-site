import type { PrismaClient } from "@prisma/client";

export class Tourneys {
    constructor(protected prisma: PrismaClient) {}

    async upcomming() {
        return this.prisma.tourneys.findMany({
            where: {
                startDate: {
                    gt: new Date()
                }
            },
            include: {
                teams: true
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
}