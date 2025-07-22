import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollOptionsUpdateManyMutationInputSchema'
import { PollOptionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollOptionsUncheckedUpdateManyInputSchema'
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'

export const PollOptionsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PollOptionsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PollOptionsUpdateManyMutationInputSchema,PollOptionsUncheckedUpdateManyInputSchema ]),
  where: PollOptionsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PollOptionsUpdateManyAndReturnArgsSchema;
