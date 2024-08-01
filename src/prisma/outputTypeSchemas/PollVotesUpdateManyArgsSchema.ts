import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollVotesUpdateManyMutationInputSchema'
import { PollVotesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollVotesUncheckedUpdateManyInputSchema'
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'

export const PollVotesUpdateManyArgsSchema: z.ZodType<Prisma.PollVotesUpdateManyArgs> = z.object({
  data: z.union([ PollVotesUpdateManyMutationInputSchema,PollVotesUncheckedUpdateManyInputSchema ]),
  where: PollVotesWhereInputSchema.optional(),
}).strict() ;

export default PollVotesUpdateManyArgsSchema;
