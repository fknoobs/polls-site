import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollVotesCreateManyInputSchema: z.ZodType<Prisma.PollVotesCreateManyInput> = z.object({
  id: z.number().int().optional(),
  fingerprint: z.string(),
  pollId: z.number().int(),
  optionId: z.number().int()
}).strict();

export default PollVotesCreateManyInputSchema;
