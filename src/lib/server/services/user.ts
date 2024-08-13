import { fail } from "@sveltejs/kit";
import { Service } from "./service";
import { attempt, validate } from "$lib/request";
import type { Prisma } from "@prisma/client";
import { SteamProfileCreateWithoutUserInputSchema } from "$prisma/inputTypeSchemas";

export class User extends Service {
    /**
     * Get current logged in user of no `userId` is passed
     * 
     * @param userId 
     * @returns 
     */
    async getProfile(userId?: string) {
        if (!userId) {
            //return this.prisma.stea.findFirst({ where: { userId: this.session?.userId } })
        }

        //return this.prisma.profile.findFirst({ where: { userId } })
    }

    async create(user: Prisma.UserCreateInput) {
        
    }

    async updateProfile(profileData: Pick<Prisma.SteamProfileCreateWithoutUserInput, 'steamId'>, userId: string) {
        const { data, errors } = await validate(SteamProfileCreateWithoutUserInputSchema, { steamId: profileData.steamId })
        
        if (errors) {
            return fail(400, errors)
        }

        const profile = await this.services.steam().getProfileBySteamId(data.steamId!)

        if (!profile) {
            return fail(404, { statusText: `No profile found for ${data.steamId}` })
        }
        
        return attempt(
            this.prisma.steamProfile.upsert,
            {
                create: {
                    steamId: data.steamId,
                    user: { connect: { id: userId } },
                },
                update: {
                    steamId: data.steamId
                },
                where: {
                    userId
                }
            }
        )
    }
}