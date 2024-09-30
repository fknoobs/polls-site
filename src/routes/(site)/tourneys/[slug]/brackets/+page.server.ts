import { JsonDatabase } from 'brackets-json-db';
import { BracketsManager } from 'brackets-manager';

const TOURNAMENT_ID = 0

export const load = async ({ parent, locals }) => {
    const test = await locals.services.toornament().tournaments().get('123')

    console.log(test.data.relationships)
}