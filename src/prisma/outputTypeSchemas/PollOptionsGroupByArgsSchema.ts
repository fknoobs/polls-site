import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'
import { PollOptionsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PollOptionsOrderByWithAggregationInputSchema'
import { PollOptionsScalarFieldEnumSchema } from '../inputTypeSchemas/PollOptionsScalarFieldEnumSchema'
import { PollOptionsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PollOptionsScalarWhereWithAggregatesInputSchema'

export const PollOptionsGroupByArgsSchema: z.ZodType<Prisma.PollOptionsGroupByArgs> = z.object({
  where: PollOptionsWhereInputSchema.optional(),
  orderBy: z.union([ PollOptionsOrderByWithAggregationInputSchema.array(),PollOptionsOrderByWithAggregationInputSchema ]).optional(),
  by: PollOptionsScalarFieldEnumSchema.array(),
  having: PollOptionsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollOptionsGroupByArgsSchema;
