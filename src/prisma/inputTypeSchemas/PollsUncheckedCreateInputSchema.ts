import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema } from './PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema';
import { PollVotesUncheckedCreateNestedManyWithoutPollInputSchema } from './PollVotesUncheckedCreateNestedManyWithoutPollInputSchema';

export const PollsUncheckedCreateInputSchema: z.ZodType<Prisma.PollsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  options: z.lazy(() => PollOptionsUncheckedCreateNestedManyWithoutPollInputSchema).optional(),
  votes: z.lazy(() => PollVotesUncheckedCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsUncheckedCreateInputSchema;
