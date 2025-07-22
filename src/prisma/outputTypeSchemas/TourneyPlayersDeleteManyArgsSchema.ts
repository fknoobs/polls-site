import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'

export const TourneyPlayersDeleteManyArgsSchema: z.ZodType<Prisma.TourneyPlayersDeleteManyArgs> = z.object({
  where: TourneyPlayersWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourneyPlayersDeleteManyArgsSchema;
