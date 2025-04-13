import { env } from "$env/dynamic/public"
import type { PrismaClient } from "@prisma/client";
import { Agent, setGlobalDispatcher } from "undici";

export class Relic {
    protected paths: string[] = []

    protected query: Record<string, string> = {}

    constructor(protected prisma: PrismaClient) {
        /**
         * {@link https://github.com/orgs/nodejs/discussions/44038}
         */
        const agent = new Agent({
            connect: {
                rejectUnauthorized: false
            }
        })
        setGlobalDispatcher(agent)
    }

    async getProfileBySteamId(steamId: string) {
        this.paths = ['community', 'leaderboard', 'GetPersonalStat']
        this.query = { title: 'coh1', profile_names: `["/steam/${steamId}"]` }

        const [response, error] = await this.request<GetPersonalStat>()

        if (error) {
            return null
        }

        if (response?.result.code !== 0) {
            return null
        }

        if (!response.statGroups.length) {
            return null
        }

        if (!response.statGroups.at(0)!.members.length) {
            return null
        }

        return response.statGroups.at(0)!.members.find(member => member.name === `/steam/${steamId}`)
    }

    protected async request<T>(): Promise<[T | null, unknown | null]> {
        try {
            const request = await fetch(`${env.PUBLIC_RELIC_API_LINK}/${this.path}?${this.querystring}`)
            const response = await request.json() as T
            
            return [response, null]
        } catch(_) {
            return [null, _]
        }
    }

    get path() {
        return this.paths.join('/')
    }

    get querystring() {
        return new URLSearchParams(this.query).toString()
    }
}