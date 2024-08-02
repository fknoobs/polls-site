import { fail } from "@sveltejs/kit";
import { Service } from "./service";
import { validate } from "$lib/request";
import type { Prisma } from "@prisma/client";
import { ProfileCreateWithoutUserInputSchema } from "$prisma/inputTypeSchemas";

export class User extends Service {
    /**
     * Get current logged in user of no `userId` is passed
     * 
     * @param userId 
     * @returns 
     */
    async getProfile(userId?: string) {
        if (!userId) {
            return this.prisma.profile.findFirst({ where: { userId: this.session?.userId } })
        }

        return this.prisma.profile.findFirst({ where: { userId } })
    }

    async updateProfile(profileData: Pick<Prisma.ProfileCreateWithoutUserInput, 'displayName' | 'steamId'>, userId: string) {
        const { data, errors } = await validate(ProfileCreateWithoutUserInputSchema, profileData)

        if (errors) {
            return fail(400, errors)
        }

        const profile = await this.services.steam().getProfileBySteamId(data.steamId!)

        if (!profile) {
            return fail(404, { statusText: `No profile found for ${data.steamId}` })
        }

        return this.prisma.profile.create({
            data: {
                displayName: data.displayName,
                steamId: data.steamId,
                user: { connect: { id: userId } }
            }
        })
    }
}