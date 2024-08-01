import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'
import { PollVotesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/PollVotesOrderByWithAggregationInputSchema'
import { PollVotesScalarFieldEnumSchema } from '../inputTypeSchemas/PollVotesScalarFieldEnumSchema'
import { PollVotesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/PollVotesScalarWhereWithAggregatesInputSchema'

export const PollVotesGroupByArgsSchema: z.ZodType<Prisma.PollVotesGroupByArgs> = z.object({
  where: PollVotesWhereInputSchema.optional(),
  orderBy: z.union([ PollVotesOrderByWithAggregationInputSchema.array(),PollVotesOrderByWithAggregationInputSchema ]).optional(),
  by: PollVotesScalarFieldEnumSchema.array(),
  having: PollVotesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollVotesGroupByArgsSchema;
