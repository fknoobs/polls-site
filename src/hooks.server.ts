import type { Handle } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client'
import { ELEVENLABS_API_KEY } from '$env/static/private'
import { ElevenLabsClient } from 'elevenlabs'
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/server/middleware/auth';
import { session } from '$lib/server/middleware/session';

export const root = (async ({ event, resolve }) => {
    event.locals.prisma = new PrismaClient()
    event.locals.elevenlabs = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY })

    return await resolve(event);
}) satisfies Handle

export const handle = sequence(root, auth, session)