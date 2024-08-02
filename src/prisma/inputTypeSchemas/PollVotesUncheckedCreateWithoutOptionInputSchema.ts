import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollVotesUncheckedCreateWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesUncheckedCreateWithoutOptionInput> = z.object({
  id: z.number().int().optional(),
  fingerprint: z.string(),
  ipaddress: z.string().optional(),
  pollId: z.number().int()
}).strict();

export default PollVotesUncheckedCreateWithoutOptionInputSchema;
