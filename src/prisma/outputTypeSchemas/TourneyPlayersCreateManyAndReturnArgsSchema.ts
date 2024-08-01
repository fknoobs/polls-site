import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersCreateManyInputSchema } from '../inputTypeSchemas/TourneyPlayersCreateManyInputSchema'

export const TourneyPlayersCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TourneyPlayersCreateManyAndReturnArgs> = z.object({
  data: z.union([ TourneyPlayersCreateManyInputSchema,TourneyPlayersCreateManyInputSchema.array() ]),
}).strict() ;

export default TourneyPlayersCreateManyAndReturnArgsSchema;
