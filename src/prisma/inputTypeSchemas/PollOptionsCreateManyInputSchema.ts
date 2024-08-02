import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollOptionsCreateManyInputSchema: z.ZodType<Prisma.PollOptionsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  pollId: z.number().int()
}).strict();

export default PollOptionsCreateManyInputSchema;
