import type { PrismaClient } from "@prisma/client";
import slugify from "slugify";

export class PollService {
    constructor(protected prisma: PrismaClient) {}

    /**
     * Get a poll by slug
     * 
     * @param slug
     */
    getPoll(slug: string) {
        return this.prisma.polls.findFirst({
            where: { slug },
            include: {
                options: { include: { votes: true } },
                votes: true
            }
        })
    }

    /**
     * Add a new unique vote on poll
     * 
     * If `fingerprint` exists, vote will be updated
     * 
     * @param pollId        - ID of the poll
     * @param fingerprint   - Unique user hash
     * @param ipaddress     - IP Adress of user
     * @param options       - Array of poll option IDs
     */
    async voteOnPoll(pollId: number, fingerprint: string, ipaddress: string, options: number[]) {
        /**
         * Delete existing vote for fingerprint
         */
        await this.prisma.pollVotes.deleteMany({ where: { fingerprint } })
        await this.prisma.pollVotes.createMany({
            data: options.map(id => {
                return {
                    pollId,
                    fingerprint,
                    ipaddress,
                    optionId: id
                }
            })
        })
    }

    /**
     * Create a new poll
     * 
     * @param title         - Keep title short
     * @param description   - Brief description of poll
     * @param options       - Array with values
     */
    async createPoll(
        title: string, 
        description: string, 
        options: string[], 
        multiple?: boolean, 
        minChoices?: number,
        maxChoices?: number,
    ) {
        return this.prisma.polls.create({
            data: {
                title,
                slug: slugify(title, { lower: true }),
                description,
                multiple,
                maxChoices,
                minChoices,
                options: {
                    createMany: {
                        data: options.map(val => ({ name: val }))
                    }
                }
            }
        })
    }
}