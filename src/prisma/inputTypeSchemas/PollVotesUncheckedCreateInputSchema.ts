import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollVotesUncheckedCreateInputSchema: z.ZodType<Prisma.PollVotesUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  fingerprint: z.string(),
  ipaddress: z.string().optional(),
  pollId: z.number().int(),
  optionId: z.number().int()
}).strict();

export default PollVotesUncheckedCreateInputSchema;
