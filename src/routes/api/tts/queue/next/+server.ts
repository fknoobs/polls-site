import { error } from '@sveltejs/kit'
import { readFileSync } from 'fs'

export const GET = async ({ locals }) => {
    const queueItem = await locals.services.ttsService().getNextInQueue()

    if (!queueItem) {
        return new Response(null, { status: 204 })
    }

    const audioFile = readFileSync(queueItem.ttsFile.filePath)

    if (!audioFile) {
        return new Response(null, { status: 204 })
    }

    return new Response(audioFile, {
        headers: {
            'Content-Type': 'audio/mp3'
        }
    })
}