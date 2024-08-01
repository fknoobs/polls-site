import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollsCreateManyInputSchema: z.ZodType<Prisma.PollsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable()
}).strict();

export default PollsCreateManyInputSchema;
