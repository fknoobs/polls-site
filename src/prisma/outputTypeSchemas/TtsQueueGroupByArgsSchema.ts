import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'
import { TtsQueueOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TtsQueueOrderByWithAggregationInputSchema'
import { TtsQueueScalarFieldEnumSchema } from '../inputTypeSchemas/TtsQueueScalarFieldEnumSchema'
import { TtsQueueScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TtsQueueScalarWhereWithAggregatesInputSchema'

export const TtsQueueGroupByArgsSchema: z.ZodType<Prisma.TtsQueueGroupByArgs> = z.object({
  where: TtsQueueWhereInputSchema.optional(),
  orderBy: z.union([ TtsQueueOrderByWithAggregationInputSchema.array(),TtsQueueOrderByWithAggregationInputSchema ]).optional(),
  by: TtsQueueScalarFieldEnumSchema.array(),
  having: TtsQueueScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TtsQueueGroupByArgsSchema;
