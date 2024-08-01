import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'
import { PollsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollsOrderByWithRelationInputSchema'
import { PollsWhereUniqueInputSchema } from '../inputTypeSchemas/PollsWhereUniqueInputSchema'

export const PollsAggregateArgsSchema: z.ZodType<Prisma.PollsAggregateArgs> = z.object({
  where: PollsWhereInputSchema.optional(),
  orderBy: z.union([ PollsOrderByWithRelationInputSchema.array(),PollsOrderByWithRelationInputSchema ]).optional(),
  cursor: PollsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollsAggregateArgsSchema;
