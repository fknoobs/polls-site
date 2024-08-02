import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PollOptionsCountOutputTypeSelectSchema: z.ZodType<Prisma.PollOptionsCountOutputTypeSelect> = z.object({
  votes: z.boolean().optional(),
}).strict();

export default PollOptionsCountOutputTypeSelectSchema;
