import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const PollsCountOutputTypeSelectSchema: z.ZodType<Prisma.PollsCountOutputTypeSelect> = z.object({
  options: z.boolean().optional(),
  votes: z.boolean().optional(),
}).strict();

export default PollsCountOutputTypeSelectSchema;
