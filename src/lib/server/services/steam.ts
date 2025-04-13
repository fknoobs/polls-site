import { env } from "$env/dynamic/public"
import type { PrismaClient } from "@prisma/client";
import { Agent, setGlobalDispatcher } from "undici";

export class Steam {
    protected paths: string[] = []

    protected query: Record<string, string> = {}

    constructor(protected prisma: PrismaClient) {}

    async getProfileBySteamId(steamId: string) {
        this.paths = ['ISteamUser', 'GetPlayerSummaries', 'v0002']
        this.query = { key: env.PUBLIC_STEAM_API_KEY!, steamids: steamId }

        const [response, error] = await this.request<{ response: { players: SteamPlayer[] } }>()

        if (error) {
            return null
        }

        if (!response?.response.players.length) {
            return null
        }

        return response.response.players.at(0)
    }

    protected async request<T>(): Promise<[T | null, unknown | null]> {
        try {
            const request = await fetch(`${env.PUBLIC_STEAM_API_LINK}/${this.path}?${this.querystring}`)
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