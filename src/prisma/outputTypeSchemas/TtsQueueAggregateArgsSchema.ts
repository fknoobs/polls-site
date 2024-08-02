import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'
import { TtsQueueOrderByWithRelationInputSchema } from '../inputTypeSchemas/TtsQueueOrderByWithRelationInputSchema'
import { TtsQueueWhereUniqueInputSchema } from '../inputTypeSchemas/TtsQueueWhereUniqueInputSchema'

export const TtsQueueAggregateArgsSchema: z.ZodType<Prisma.TtsQueueAggregateArgs> = z.object({
  where: TtsQueueWhereInputSchema.optional(),
  orderBy: z.union([ TtsQueueOrderByWithRelationInputSchema.array(),TtsQueueOrderByWithRelationInputSchema ]).optional(),
  cursor: TtsQueueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TtsQueueAggregateArgsSchema;
