import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateNestedManyWithoutPollInputSchema } from './PollVotesCreateNestedManyWithoutPollInputSchema';

export const PollsCreateWithoutOptionsInputSchema: z.ZodType<Prisma.PollsCreateWithoutOptionsInput> = z.object({
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional(),
  votes: z.lazy(() => PollVotesCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsCreateWithoutOptionsInputSchema;
