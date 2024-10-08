import { readFileSync } from "fs"
import { json } from "@sveltejs/kit"

export const GET = async ({ locals }) => {
    const data = await locals.elevenlabs.voices.getAll()

    //await locals.elevenlabs.voices.delete('CjqJaiWBjuzt9Plf1pzF')

    const sopaVoices = Array.from(Array(14).keys()).map(i => {
        const file = `static/tts-audio-voices/sopa/voice_of_sopa - isolated_out_${(i + 1)}.wav`
        return new Blob([readFileSync(file)])
    })
    const statementVoices = Array.from(Array(7).keys()).map(i => {
        const file = `static/tts-audio-voices/statement/voice_of_statement_out_${(i + 1)}.wav`
        return new Blob([readFileSync(file)])
    })

    /**
     * Add Adolfs voice
     */
    if (!data.voices.find(voice => voice.name === 'Adolf')) {
        await locals.elevenlabs.voices.add({
            files: [new Blob([readFileSync('static/tts-audio-voices/adolf/voice_of_adolf.mp3')])],
            name: 'Adolf'
        })

        console.log('Adolf has been added')
    }

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

    /**
     * Add Simply's voice
     */
    if (!data.voices.find(voice => voice.name === 'Simply')) {
        await locals.elevenlabs.voices.add({
            files: [new Blob([readFileSync('static/tts-audio-voices/simply/voice_of_simply.mp3')])],
            name: 'Simply'
        })

        console.log('Simply has been added')
    }

    /**
     * Add D3exn's voice
     */
    if (!data.voices.find(voice => voice.name === 'Ika')) {
        await locals.elevenlabs.voices.add({
            files: [new Blob([readFileSync('static/tts-audio-voices/d3exn/voice_of_d3exn.m4a')])],
            name: 'Ika'
        })

        console.log('D3exn has been added')
    }

    /**
     * Add Annoying voice
     */
    if (!data.voices.find(voice => voice.name === 'Annoying')) {
        await locals.elevenlabs.voices.addSharingVoice('1c07ef5740387faa0fd1f7e624ce51055c0b270674ab3da0f0e22c2882bce3c4', 'dfZGXKiIzjizWtJ0NgPy', {
            new_name: 'Annoying'
        })

        console.log('Annoying has been added')
    }

    /**
     * Add Xcom voice
     */
    if (!data.voices.find(voice => voice.name === 'Xcom')) {
        await locals.elevenlabs.voices.add({
            files: [new Blob([readFileSync('static/tts-audio-voices/xcom/voice_of_xcom.mp3')])],
            name: 'Xcom'
        })

        console.log('Xcom has been added')
    }

    return json({
        status: 200,
        statusText: 'READY',
        data
    })
}