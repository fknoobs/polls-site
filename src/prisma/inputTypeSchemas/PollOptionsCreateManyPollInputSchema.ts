import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollOptionsCreateManyPollInputSchema: z.ZodType<Prisma.PollOptionsCreateManyPollInput> = z.object({
  id: z.number().int().optional(),
  name: z.string()
}).strict();

export default PollOptionsCreateManyPollInputSchema;
