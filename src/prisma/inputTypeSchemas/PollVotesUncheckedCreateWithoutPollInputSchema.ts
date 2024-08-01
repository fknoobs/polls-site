import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollVotesUncheckedCreateWithoutPollInputSchema: z.ZodType<Prisma.PollVotesUncheckedCreateWithoutPollInput> = z.object({
  id: z.number().int().optional(),
  fingerprint: z.string(),
  optionId: z.number().int()
}).strict();

export default PollVotesUncheckedCreateWithoutPollInputSchema;
