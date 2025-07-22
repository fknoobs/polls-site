import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesWhereInputSchema } from '../inputTypeSchemas/PollVotesWhereInputSchema'

export const PollVotesDeleteManyArgsSchema: z.ZodType<Prisma.PollVotesDeleteManyArgs> = z.object({
  where: PollVotesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PollVotesDeleteManyArgsSchema;
