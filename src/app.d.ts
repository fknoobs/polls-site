// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { Logger, LoggerOptions } from 'pino'

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

    type AccessToken = {
        access_token: string
        token_type: string
        expires_in: number
        scope: string
        created_at: number
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

    module Challonge {
        interface Tournament {
            id?: string
            type?: string
            attributes: {
                name: string
                url?: string
                /**
                 * @default single elimination
                 * @enum {string}
                 */
                tournament_type:
                | "single elimination"
                | "double elimination"
                | "round robin"
                | "swiss"
                | "free for all"
                /** @default Tom Clancy's Rainbow Six Siege */
                game_name?: string
                /**
                 * @description When true, this tournament will be opted out for search engine bots and will be hidden from indexes on Challonge
                 * @default false
                 */
                private?: boolean
                /**
                 * Format: date_time
                 * @description The scheduled start time. Note that Challonge will not automatically start the tournament.
                 */
                starts_at?: string
                description?: string
                notifications?: {
                    /** @default true */
                    upon_matches_open?: boolean
                    /** @default true */
                    upon_tournament_ends?: boolean
                }
                match_options?: {
                    /**
                     * @description For single or double elimination only, consolation matches will be run to break ties up to this final placement.
                     * @default 3
                     */
                    consolation_matches_target_rank?: number
                    /**
                     * @description Whether or not to allow match attachment uploads
                     * @default false
                     */
                    accept_attachments?: boolean
                }
                registration_options?: {
                    /**
                     * @description Allow registered Challonge users to self-register for this tournament
                     * @default false
                     */
                    open_signup?: boolean
                    /** @description Maximum number of participants allowed in the tournament before the waitlist kicks in */
                    signup_cap?: number
                    /** @description Number of minutes for check-in prior to tournament start time. Must be a multiple of 5. */
                    check_in_duration?: number
                }
                seeding_options?: {
                    /** @default false */
                    hide_seeds?: boolean
                    /**
                     * @description When true, seeding rules are ignored and participants are placed in the bracket from top to bottom.
                     * @default false
                     */
                    sequential_pairings?: boolean
                }
                station_options?: {
                    /**
                     * @description Automatically assign stations to playable matches (requires one or more stations)
                     * @default false
                     */
                    auto_assign?: boolean
                    /**
                     * @description When true, playable matches won't start until they have a station assigned to them
                     * @default false
                     */
                    only_start_matches_with_assigned_stations?: boolean
                }
                /**
                 * @description When true, Challonge's two-stage format is used (group stage + final stage). Additional tournament state transitions must be performed (start_group_stage, finalize_group_stage).
                 * @default false
                 */
                group_stage_enabled?: boolean
                group_stage_options?: {
                    /**
                     * @default round robin
                     * @enum {string}
                     */
                    stage_type?: "round robin" | "single elimination" | "double elimination"
                    /** @default 4 */
                    group_size?: number
                    /** @default 2 */
                    participant_count_to_advance_per_group?: number
                    /**
                     * @description Round robin format only, where 1 = single round robin, 2 = double round robin, 3 = triple round robin
                     * @default 1
                     */
                    rr_iterations?: number
                    /**
                     * @description Round robin format only, determines the primary ranking stat.
                     * @default
                     * @enum {string}
                     */
                    ranked_by?:
                    | ""
                    | "match wins"
                    | "game wins"
                    | "game win percentage"
                    | "points scored"
                    | "points difference"
                    | "custom"
                    /**
                     * Format: float
                     * @description For 'custom' ranked by round robin group stage
                     * @default 1
                     */
                    rr_pts_for_match_win?: number
                    /**
                     * Format: float
                     * @description For 'custom' ranked by round robin group stage
                     * @default 0.5
                     */
                    rr_pts_for_match_tie?: number
                    /**
                     * Format: float
                     * @description For 'custom' ranked by round robin group stage
                     * @default 0
                     */
                    rr_pts_for_game_win?: number
                    /**
                     * Format: float
                     * @description For 'custom' ranked by round robin group stage
                     * @default 0
                     */
                    rr_pts_for_game_tie?: number
                    /**
                     * @description Double elimination only - starts the bottom half of seeds in the losers bracket
                     * @default false
                     */
                    split_participants?: boolean
                }
                double_elimination_options?: {
                    /**
                     * @description Double elimination only - starts the bottom half of seeds in the losers bracket
                     * @default false
                     */
                    split_participants?: boolean
                    /**
                     * @description When blank, the losers bracket winner has to beat the winners bracket winner twice.
                     * @default
                     * @enum {string}
                     */
                    grand_finals_modifier?: "" | "skip" | "single match"
                }
                round_robin_options?: {
                    /** @default 2 */
                    iterations?: number
                    /**
                     * @default
                     * @enum {string}
                     */
                    ranking?:
                    | ""
                    | "match wins"
                    | "game wins"
                    | "game win percentage"
                    | "points scored"
                    | "points difference"
                    | "custom"
                    /**
                     * Format: float
                     * @default 1
                     */
                    pts_for_game_win?: number
                    /**
                     * Format: float
                     * @default 0
                     */
                    pts_for_game_tie?: number
                    /**
                     * Format: float
                     * @default 1
                     */
                    pts_for_match_win?: number
                    /**
                     * Format: float
                     * @default 0.5
                     */
                    pts_for_match_tie?: number
                }
                swiss_options?: {
                    /** @default 2 */
                    rounds?: number
                    /**
                     * Format: float
                     * @default 1
                     */
                    pts_for_game_win?: number
                    /**
                     * Format: float
                     * @default 0
                     */
                    pts_for_game_tie?: number
                    /**
                     * Format: float
                     * @default 1
                     */
                    pts_for_match_win?: number
                    /**
                     * Format: float
                     * @default 0.5
                     */
                    pts_for_match_tie?: number
                }
                free_for_all_options?: {
                    /** @default 4 */
                    max_participants?: number
                }
            }
        }
    }
}

export { }
