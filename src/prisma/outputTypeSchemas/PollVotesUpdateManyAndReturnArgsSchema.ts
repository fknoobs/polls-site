import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesUpdateManyMutationInputSchema } from '../inputTypeSchemas/PollVotesUpdateManyMutationInputSchema'
import { PollVotesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/PollVotesUncheckedUpdateManyInputSchema'
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'

export const PollVotesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.PollVotesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ PollVotesUpdateManyMutationInputSchema,PollVotesUncheckedUpdateManyInputSchema ]),
  where: PollVotesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PollVotesUpdateManyAndReturnArgsSchema;
