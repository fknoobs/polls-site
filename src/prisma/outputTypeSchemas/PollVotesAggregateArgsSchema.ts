import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'
import { PollVotesOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollVotesOrderByWithRelationInputSchema'
import { PollVotesWhereUniqueInputSchema } from '../inputTypeSchemas/PollVotesWhereUniqueInputSchema'

export const PollVotesAggregateArgsSchema: z.ZodType<Prisma.PollVotesAggregateArgs> = z.object({
  where: PollVotesWhereInputSchema.optional(),
  orderBy: z.union([ PollVotesOrderByWithRelationInputSchema.array(),PollVotesOrderByWithRelationInputSchema ]).optional(),
  cursor: PollVotesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollVotesAggregateArgsSchema;
