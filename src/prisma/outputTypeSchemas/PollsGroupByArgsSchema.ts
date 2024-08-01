import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'
import { PollsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PollsOrderByWithAggregationInputSchema'
import { PollsScalarFieldEnumSchema } from '../inputTypeSchemas/PollsScalarFieldEnumSchema'
import { PollsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PollsScalarWhereWithAggregatesInputSchema'

export const PollsGroupByArgsSchema: z.ZodType<Prisma.PollsGroupByArgs> = z.object({
  where: PollsWhereInputSchema.optional(),
  orderBy: z.union([ PollsOrderByWithAggregationInputSchema.array(),PollsOrderByWithAggregationInputSchema ]).optional(),
  by: PollsScalarFieldEnumSchema.array(),
  having: PollsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollsGroupByArgsSchema;
