import { PrismaClient } from '@prisma/client'
import { Services } from '$lib/server/services';
import { ELEVENLABS_API_KEY } from '$env/static/private';
import { ElevenLabsClient } from 'elevenlabs';

export const handle = async ({ event, resolve }) => {
    event.locals.prisma = new PrismaClient()
    event.locals.services = new Services(event.locals.prisma)
    event.locals.elevenlabs = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY })

    return await resolve(event);
}