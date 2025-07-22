import { dev } from '$app/environment'
import { play } from 'elevenlabs'
import { createWriteStream } from 'fs'
import { createId } from '@paralleldrive/cuid2'
import type { VoiceSettings } from 'elevenlabs/api'

export const GET = async ({ locals, url }) => {
    const userName = url.searchParams.get('username') as string
    const voiceName = url.searchParams.get('voiceName') as string
    const rewardName = url.searchParams.get('rewardName') as string
    const message = url.searchParams.get('message') as string

    /**
     * Ignore bots and !commands
     */
    if (userName.includes('bot') || message.startsWith('!')) {
        return new Response('OK')
    }

    console.log('TTS', userName, voiceName, rewardName, message)

    try {
        let voice_settings: VoiceSettings = {
            stability: 0.6,
            similarity_boost: 0.8,
            style: 0.05
        }

        // Ika = D3exn
        if (voiceName === 'Ika') {
            voice_settings = {
                stability: .5,
                similarity_boost: .5,
                style: .3
            }
        }

        const audioStream = await locals.elevenlabs.generate({
            voice: voiceName,
            stream: true,
            text: message,
            model_id: 'eleven_multilingual_v2',
            enable_logging: false,
            output_format: 'mp3_44100_96',
            voice_settings
        }) as unknown as ReadableStream
        
        // if (dev) {
        //     // @ts-ignore
        //     await play(audioStream)
        //     /**
        //      * Ignore rest since we in development mode
        //      */
        //     return new Response('OK')
        // }

        const filename = createId()
        const fileStream = createWriteStream(`static/tts-audio/${filename}.mp3`)
        const reader = audioStream.getReader()
    
        reader.read().then(function processAudio({ done, value }) {
            if (done) {
                /**
                 * Save TTS audio file
                 * This will add new audio file to queue aswell
                 */
                locals.services.ttsService().addTtsAudioFile(
                    rewardName,
                    userName,
                    message,
                    `static/tts-audio/${filename}.mp3`
                )
                fileStream.close()
                return
            }
    
            fileStream.write(value)
            reader.read().then(processAudio);
        })
    } catch(_) {
        console.log(_)
        return new Response('FAIL')
    }
    
    return new Response('OK')
}