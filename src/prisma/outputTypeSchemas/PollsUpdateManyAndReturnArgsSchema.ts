import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollsUpdateManyMutationInputSchema'
import { PollsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollsUncheckedUpdateManyInputSchema'
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'

export const PollsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PollsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PollsUpdateManyMutationInputSchema,PollsUncheckedUpdateManyInputSchema ]),
  where: PollsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PollsUpdateManyAndReturnArgsSchema;
