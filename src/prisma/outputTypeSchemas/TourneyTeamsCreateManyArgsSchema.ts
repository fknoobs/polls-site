import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsCreateManyInputSchema } from '../inputTypeSchemas/TourneyTeamsCreateManyInputSchema'

export const TourneyTeamsCreateManyArgsSchema: z.ZodType<Prisma.TourneyTeamsCreateManyArgs> = z.object({
  data: z.union([ TourneyTeamsCreateManyInputSchema,TourneyTeamsCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneyTeamsCreateManyArgsSchema;
