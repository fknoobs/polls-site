import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollVotesCreateManyInputSchema: z.ZodType<Prisma.PollVotesCreateManyInput> = z.object({
  id: z.number().int().optional(),
  fingerprint: z.string(),
  ipaddress: z.string().optional(),
  pollId: z.number().int(),
  optionId: z.number().int()
}).strict();

export default PollVotesCreateManyInputSchema;
