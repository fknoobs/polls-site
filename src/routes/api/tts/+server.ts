import { createWriteStream } from 'fs'
import { createId } from '@paralleldrive/cuid2';

export const GET = async ({ request, locals }) => {
    const data = request.headers.get('x-data') as string
    const [rewardName, userName, message, voice] = data.split(';')

    /**
     * Ignore bots and !commands
     */
    if (userName.includes('bot') || message.startsWith('!')) {
        return new Response('OK')
    }

    try {
        const audioStream = await locals.elevenlabs.generate({
            voice,
            stream: true,
            text: message,
            model_id: 'eleven_multilingual_v2',
        }) as unknown as ReadableStream
        
        const filename = createId()
        const fileStream = createWriteStream(`static/tts-audio/${filename}.mp3`)
        const reader = audioStream.getReader()
    
        reader.read().then(function processAudio({ done, value }) {
            if (done) {
                fileStream.close()
                return
            }
    
            fileStream.write(value)
            reader.read().then(processAudio);
        })
    
        await locals.services.ttsService().addTtsAudioFile(
            rewardName,
            userName,
            message,
            `static/tts-audio/${filename}.mp3`
        )
    } catch(_) {
        return new Response('FAIL')
    }

    return new Response('OK')
}