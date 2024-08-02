import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'
import { PollOptionsOrderByWithRelationInputSchema } from '../inputTypeSchemas/PollOptionsOrderByWithRelationInputSchema'
import { PollOptionsWhereUniqueInputSchema } from '../inputTypeSchemas/PollOptionsWhereUniqueInputSchema'

export const PollOptionsAggregateArgsSchema: z.ZodType<Prisma.PollOptionsAggregateArgs> = z.object({
  where: PollOptionsWhereInputSchema.optional(),
  orderBy: z.union([ PollOptionsOrderByWithRelationInputSchema.array(),PollOptionsOrderByWithRelationInputSchema ]).optional(),
  cursor: PollOptionsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default PollOptionsAggregateArgsSchema;
