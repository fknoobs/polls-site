import { readFileSync } from "fs"
import { json } from "@sveltejs/kit"
import { Readable } from "stream"

export const GET = async ({ locals }) => {
    const data = await locals.elevenlabs.voices.getAll()
    const sopaVoices = Array.from(Array(14).keys()).map(i => {
        const file = `static/tts-audio-voices/sopa/voice_of_sopa - isolated_out_${(i + 1)}.wav`
        return new Blob([readFileSync(file)])
    })
    const statementVoices = Array.from(Array(7).keys()).map(i => {
        const file = `static/tts-audio-voices/statement/voice_of_statement_out_${(i + 1)}.wav`
        return new Blob([readFileSync(file)])
    })

    /**
     * Add Sopa's voice
     */
    if (!data.voices.find(voice => voice.name === 'Sopa')) {
        await locals.elevenlabs.voices.add({
            files: sopaVoices,
            name: 'Sopa'
        })

        console.log('Sopa has been added')
    }

    /**
     * Add Statement's voice
     */
    if (!data.voices.find(voice => voice.name === 'Sopa')) {
        await locals.elevenlabs.voices.add({
            files: statementVoices,
            name: 'Statement'
        })

        console.log('Statement has been added')
    }

    return json({
        status: 200,
        statusText: 'READY',
        data: data.voices.filter(voice => voice.name === 'Sopa')
    })
}