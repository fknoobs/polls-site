import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollsUpdateManyMutationInputSchema'
import { PollsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollsUncheckedUpdateManyInputSchema'
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'

export const PollsUpdateManyArgsSchema: z.ZodType<Prisma.PollsUpdateManyArgs> = z.object({
  data: z.union([ PollsUpdateManyMutationInputSchema,PollsUncheckedUpdateManyInputSchema ]),
  where: PollsWhereInputSchema.optional(),
}).strict() ;

export default PollsUpdateManyArgsSchema;
