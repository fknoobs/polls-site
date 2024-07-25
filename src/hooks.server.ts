import { POCKETBASE_ADMIN, POCKETBASE_PASS, POCKETBASE_URL } from '$env/static/private';
import PocketBase from 'pocketbase'
import type { TypedPocketBase } from './pocketbase-types';

export const handle = async ({ event, resolve }) => {
    event.locals.pocketbase = new PocketBase(POCKETBASE_URL) as TypedPocketBase

    event.locals.pocketbase.autoCancellation(false)
    await event.locals.pocketbase.admins.authWithPassword(POCKETBASE_ADMIN, POCKETBASE_PASS);

    const response = await resolve(event);
    return response;
}