import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsCreateManyInputSchema } from '../inputTypeSchemas/TourneyTeamsCreateManyInputSchema'

export const TourneyTeamsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneyTeamsCreateManyAndReturnArgs> = z.object({
  data: z.union([ TourneyTeamsCreateManyInputSchema,TourneyTeamsCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneyTeamsCreateManyAndReturnArgsSchema;
