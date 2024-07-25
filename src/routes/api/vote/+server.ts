import { json } from '@sveltejs/kit'

export const GET = ({ request }) => {
    const poll = request.headers.get('x-poll')
    const user = request.headers.get('x-user')
    const command = request.headers.get('x-command')

    if (!poll || !user || !command) {
        return json(null)
    }

    const value = command.replace('!vote ', '')

    console.log(value)
    
    return json({})
}