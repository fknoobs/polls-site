import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'

export const TourneyTeamsDeleteManyArgsSchema: z.ZodType<Prisma.TourneyTeamsDeleteManyArgs> = z.object({
  where: TourneyTeamsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TourneyTeamsDeleteManyArgsSchema;
