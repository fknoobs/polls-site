import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollOptionsUpdateManyMutationInputSchema'
import { PollOptionsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollOptionsUncheckedUpdateManyInputSchema'
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'

export const PollOptionsUpdateManyArgsSchema: z.ZodType<Prisma.PollOptionsUpdateManyArgs> = z.object({
  data: z.union([ PollOptionsUpdateManyMutationInputSchema,PollOptionsUncheckedUpdateManyInputSchema ]),
  where: PollOptionsWhereInputSchema.optional(),
}).strict() ;

export default PollOptionsUpdateManyArgsSchema;
