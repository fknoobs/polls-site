import { z } from 'zod';

export const TourneyPlayersScalarFieldEnumSchema = z.enum(['id','player','teamId']);

export default TourneyPlayersScalarFieldEnumSchema;
