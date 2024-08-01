import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesCreateManyInputSchema } from '../inputTypeSchemas/PollVotesCreateManyInputSchema'

export const PollVotesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PollVotesCreateManyAndReturnArgs> = z.object({
  data: z.union([ PollVotesCreateManyInputSchema,PollVotesCreateManyInputSchema.array() ]),
}).strict() ;

export default PollVotesCreateManyAndReturnArgsSchema;
