import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema } from './PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema';
import { PollVotesUncheckedCreateNestedManyWithoutPollInputSchema } from './PollVotesUncheckedCreateNestedManyWithoutPollInputSchema';

export const PollsUncheckedCreateInputSchema: z.ZodType<Prisma.PollsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional(),
  options: z.lazy(() => PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema).optional(),
  votes: z.lazy(() => PollVotesUncheckedCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsUncheckedCreateInputSchema;
