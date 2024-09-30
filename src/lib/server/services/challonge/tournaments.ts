import type { Challonge } from "../challonge";

export class Tournaments {
    constructor(protected challonge: Challonge) {}

    async list() {
        const { access_token } = await this.challonge.getToken()

        return this.challonge.fetch
            .url('v2.1/tournaments')
            .auth(`Bearer ${access_token}`)
            .get()
            .unauthorized(async (error, req) => {
                await this.challonge.getToken(true)

                return req
                    .auth(`Bearer ${access_token}`)
                    .get()
                    .unauthorized(err => {
                        throw err
                    })
                    .json()
            })
            .json()
    }

    async get(id: string) {
        const { access_token } = await this.challonge.getToken()

        return this.challonge.fetch
            .url(`v2.1/tournaments/15118986`)
            .auth(`Bearer ${access_token}`)
            .get()
            .unauthorized(async (error, req) => {
                await this.challonge.getToken(true)

                return req
                    .auth(`Bearer ${access_token}`)
                    .get()
                    .unauthorized(err => {
                        throw err
                    })
                    .json()
            })
            .json<{ data: Challonge.Tournament }>()
    }
}