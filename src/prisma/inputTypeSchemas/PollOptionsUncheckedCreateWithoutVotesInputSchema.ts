import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollOptionsUncheckedCreateWithoutVotesInputSchema: z.ZodType<Prisma.PollOptionsUncheckedCreateWithoutVotesInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  pollId: z.number().int()
}).strict();

export default PollOptionsUncheckedCreateWithoutVotesInputSchema;
