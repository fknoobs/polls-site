import type { Handle } from '@sveltejs/kit';
import { Prisma, PrismaClient } from '@prisma/client'
import { Services } from '$lib/server/services'
import { ELEVENLABS_API_KEY } from '$env/static/private'
import { ElevenLabsClient } from 'elevenlabs'
import { sequence } from '@sveltejs/kit/hooks';
import { auth } from '$lib/server/middleware/auth';
import slugify from 'slugify';

export const root = (async ({ event, resolve }) => {
    // @ts-ignore
    event.locals.prisma = new PrismaClient().$extends({
        query: {
            tourneys: {
                create: ({ model, args, query }: { model: any; args: Prisma.MiddlewareParams['args']; query: (args: Prisma.MiddlewareParams['args']) => Promise<any> }) => {
                    if (args.data && args.data?.name || args.data?.title) {
                        args.data.slug = slugify(`${args.data?.title || args.data?.name}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g})
                    }
                    return query(args);
                },
                update: ({ model, args, query }: { model: any; args: Prisma.MiddlewareParams['args']; query: (args: Prisma.MiddlewareParams['args']) => Promise<any> }) => {
                    if (args.data && args.data?.title || args.data?.name) {
                        args.data.slug = slugify(`${args.data?.title || args.data?.name}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g})
                    }
                    return query(args);
                }
            },
            polls: {
                create: ({ model, args, query }: { model: any; args: Prisma.MiddlewareParams['args']; query: (args: Prisma.MiddlewareParams['args']) => Promise<any> }) => {
                    if (args.data && args.data?.name || args.data?.title) {
                        args.data.slug = slugify(`${args.data?.title || args.data?.name}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g})
                    }
                    return query(args);
                },
                update: ({ model, args, query }: { model: any; args: Prisma.MiddlewareParams['args']; query: (args: Prisma.MiddlewareParams['args']) => Promise<any> }) => {
                    if (args.data && args.data?.title || args.data?.name) {
                        args.data.slug = slugify(`${args.data?.title || args.data?.name}`, {lower: true, strict: true, remove: /[*+~.()'"!:@]/g})
                    }
                    return query(args);
                }
            }
        }
    });
    event.locals.services = new Services(event.locals.prisma)
    event.locals.elevenlabs = new ElevenLabsClient({ apiKey: ELEVENLABS_API_KEY })

    return await resolve(event);
}) satisfies Handle

export const handle = sequence(root, auth)