import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema } from './PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema';

export const PollsUncheckedCreateWithoutVotesInputSchema: z.ZodType<Prisma.PollsUncheckedCreateWithoutVotesInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional(),
  options: z.lazy(() => PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsUncheckedCreateWithoutVotesInputSchema;
