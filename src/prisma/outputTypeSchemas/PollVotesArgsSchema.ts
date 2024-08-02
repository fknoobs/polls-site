import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollVotesSelectSchema } from '../inputTypeSchemas/PollVotesSelectSchema';
import { PollVotesIncludeSchema } from '../inputTypeSchemas/PollVotesIncludeSchema';

export const PollVotesArgsSchema: z.ZodType<Prisma.PollVotesDefaultArgs> = z.object({
  select: z.lazy(() => PollVotesSelectSchema).optional(),
  include: z.lazy(() => PollVotesIncludeSchema).optional(),
}).strict();

export default PollVotesArgsSchema;
