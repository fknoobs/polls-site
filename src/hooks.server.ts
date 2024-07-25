import { POCKETBASE_ADMIN, POCKETBASE_PASS, POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types';
import { PrismaClient } from '@prisma/client'
import { Services } from '$lib/server/services';

export const handle = async ({ event, resolve }) => {
    event.locals.prisma = new PrismaClient()
    event.locals.services = new Services(event.locals.prisma)

    return await resolve(event);
}