import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesCreateManyInputSchema } from '../inputTypeSchemas/PollVotesCreateManyInputSchema'

export const PollVotesCreateManyArgsSchema: z.ZodType<Prisma.PollVotesCreateManyArgs> = z.object({
  data: z.union([ PollVotesCreateManyInputSchema,PollVotesCreateManyInputSchema.array() ]),
}).strict() ;

export default PollVotesCreateManyArgsSchema;
