import { z } from 'zod';

export const TourneyPlayersScalarFieldEnumSchema = z.enum(['id','steamId','player','profile','timezone','teamId']);

export default TourneyPlayersScalarFieldEnumSchema;
