// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Logger, LoggerOptions } from 'pino';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
            services: import('./lib/server/services').Services
            prisma: import('@prisma/client').PrismaClient
            elevenlabs: import('elevenlabs').ElevenLabsClient
        }
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

    type GetPersonalStat = {
        result: {
            code: number
            message: string
        }
        statGroups: {
            id: number
            name: string
            type: number
            members: CoHPlayer[]
        }[]
        leaderboardStats: {
            statgroup_id: number
            leaderboard_id: number
            wins: number
            losses: number
            streak: number
            disputes: number
            drops: number
            rank: number
            ranktotal: number
            ranklevel: number
            regionrank: number
            regionranktotal: number
            lastmatchdate: number
            highestrank: number
            highestranklevel: number
        }[]
    }

    type CoHPlayer = {
        profile_id: number
        name: string
        alias: string
        personal_statgroup_id: number
        xp: number
        level: number
        leaderboardregion_id: number
        country: string
    }

    type SteamPlayer = {
        steamid: string
        communityvisibilitystate: number
        profilestate: number
        personaname: string
        profileurl: string
        avatar: string
        avatarmedium: string
        avatarfull: string
        avatarhash: string
        personastate: number
        realname: string
        primaryclanid: string
        timecreated: number
        personastateflags: number
        loccountrycode?: string
        locstatecode?: string
        loccityid?: number
    }
    
    type Player = CoHPlayer & SteamPlayer

    type User = {
        createdAt: string
        email: string
        emailVerified: string | null
        id: string
        image: string
        name: string
        role: 'ADMIN' | 'MODERATOR' | 'USER'
        updatedAt: string
        steam: {
            id: string
            steamId: string
        }
    }

    type Session = {
        createdAt: string
        expires: string
        id: string
        sessionToken: string
        updatedAt: string
        user: User
        userId: string
    }
    
    enum ServerEnvironment {
        DEV,
        PREV,
        STG,
        PROD 
    }

    type PinoLogger = Logger

    type ValidationErrors<T extends Record<string, any>> = Partial<{
        [K in keyof T]: T[K] extends any[] ? ZodIssue[] : ZodIssue
    }> | undefined
}

export {}
