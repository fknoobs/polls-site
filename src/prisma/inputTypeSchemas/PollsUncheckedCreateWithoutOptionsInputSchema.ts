import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesUncheckedCreateNestedManyWithoutPollInputSchema } from './PollVotesUncheckedCreateNestedManyWithoutPollInputSchema';

export const PollsUncheckedCreateWithoutOptionsInputSchema: z.ZodType<Prisma.PollsUncheckedCreateWithoutOptionsInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional(),
  votes: z.lazy(() => PollVotesUncheckedCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsUncheckedCreateWithoutOptionsInputSchema;
