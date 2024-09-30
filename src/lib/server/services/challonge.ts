import { CHALLONGE_CLIENT_ID, CHALLONGE_CLIENT_SECRET } from '$env/static/private'
import { Tournaments } from './challonge/tournaments'
import { Service } from './service'
import wretch from 'wretch'
import QueryStringAddon from 'wretch/addons/queryString'
import { tmpdir } from 'node:os'
import { writeFile, access, constants, stat, readFile } from 'node:fs/promises'
import path from 'node:path'

export class Challonge extends Service {
    /**
     * View, create, edit, delete and list tournaments
     */
    tournaments() {
        return new Tournaments(this)
    }

    /**
     * Request a new access token from the oath server
     */
    requestToken() {
        return this.fetch
            .url('oauth/token')
            .query({
                'grant_type': 'client_credentials',
                'client_id': CHALLONGE_CLIENT_ID,
                'client_secret': CHALLONGE_CLIENT_SECRET
            })
            .post()
            .json<AccessToken>()
    }

    /**
     * Get current access token, if none exists request one
     * 
     * If `expired` is set to `true` will request a new token from the *oauth server*
     * 
     * @param expired
     */
    async getToken(expired = false) {
        const accessTokenPath = path.join(tmpdir(), 'challonge.json')
        const fileExists = async (path: string) => !!(await stat(path).catch(e => false))

        if (!await fileExists(accessTokenPath)) {
            await writeFile(accessTokenPath, 'null')
        }

        let contents = await readFile(accessTokenPath)
        let token = JSON.parse(contents.toString()) as AccessToken | null

        if (!token) {
            token = await this.requestToken()
            writeFile(accessTokenPath, JSON.stringify(token))
        }
        
        return token
    }

    get fetch() {
        return wretch('https://api.challonge.com/')
            .addon(QueryStringAddon)
            .errorType('json')
            .content('application/vnd.api+json')
            .accept('application/json')
            .headers({
                'Authorization-Type': 'v2'
            })
    }
}