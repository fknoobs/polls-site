import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateNestedManyWithoutPollInputSchema } from './PollOptionsCreateNestedManyWithoutPollInputSchema';

export const PollsCreateWithoutVotesInputSchema: z.ZodType<Prisma.PollsCreateWithoutVotesInput> = z.object({
  title: z.string(),
  slug: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  multiple: z.boolean().optional(),
  minChoices: z.number().int().optional(),
  maxChoices: z.number().int().optional(),
  options: z.lazy(() => PollOptionsCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsCreateWithoutVotesInputSchema;
