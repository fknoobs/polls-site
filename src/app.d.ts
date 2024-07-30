// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
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
            code: number;
            message: string;
        };
        statGroups: {
            id: number;
            name: string;
            type: number;
            members: CoHPlayer[];
        }[];
        leaderboardStats: {
            statgroup_id: number;
            leaderboard_id: number;
            wins: number;
            losses: number;
            streak: number;
            disputes: number;
            drops: number;
            rank: number;
            ranktotal: number;
            ranklevel: number;
            regionrank: number;
            regionranktotal: number;
            lastmatchdate: number;
            highestrank: number;
            highestranklevel: number;
        }[];
    };

    type CoHPlayer = {
        profile_id: number;
        name: string;
        alias: string;
        personal_statgroup_id: number;
        xp: number;
        level: number;
        leaderboardregion_id: number;
        country: string;
    }

    type SteamPlayer = {
        steamid: string;
        communityvisibilitystate: number;
        profilestate: number;
        personaname: string;
        profileurl: string;
        avatar: string;
        avatarmedium: string;
        avatarfull: string;
        avatarhash: string;
        personastate: number;
        realname: string;
        primaryclanid: string;
        timecreated: number;
        personastateflags: number;
        loccountrycode?: string;
        locstatecode?: string;
        loccityid?: number;
    }

    type Player = CoHPlayer & SteamPlayer
}

export {};
