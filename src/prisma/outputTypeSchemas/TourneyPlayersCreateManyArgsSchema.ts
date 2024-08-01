import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersCreateManyInputSchema } from '../inputTypeSchemas/TourneyPlayersCreateManyInputSchema'

export const TourneyPlayersCreateManyArgsSchema: z.ZodType<Prisma.TourneyPlayersCreateManyArgs> = z.object({
  data: z.union([ TourneyPlayersCreateManyInputSchema,TourneyPlayersCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneyPlayersCreateManyArgsSchema;
