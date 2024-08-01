import { z } from 'zod';

export const TourneyTeamsScalarFieldEnumSchema = z.enum(['id','name','tourneyId']);

export default TourneyTeamsScalarFieldEnumSchema;
