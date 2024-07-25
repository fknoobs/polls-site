import { POCKETBASE_ADMIN, POCKETBASE_PASS, POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types';
import { PrismaClient } from '@prisma/client'

export const handle = async ({ event, resolve }) => {
    event.locals.prisma = new PrismaClient()
    
    return await resolve(event);
}