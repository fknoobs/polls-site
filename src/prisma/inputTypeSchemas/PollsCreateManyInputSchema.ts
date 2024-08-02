import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const PollsCreateManyInputSchema: z.ZodType<Prisma.PollsCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional()
}).strict();

export default PollsCreateManyInputSchema;
