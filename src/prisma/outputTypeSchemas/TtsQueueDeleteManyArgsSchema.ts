import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'

export const TtsQueueDeleteManyArgsSchema: z.ZodType<Prisma.TtsQueueDeleteManyArgs> = z.object({
  where: TtsQueueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TtsQueueDeleteManyArgsSchema;
