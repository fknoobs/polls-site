import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateNestedManyWithoutPollInputSchema } from './PollOptionsCreateNestedManyWithoutPollInputSchema';
import { PollVotesCreateNestedManyWithoutPollInputSchema } from './PollVotesCreateNestedManyWithoutPollInputSchema';

export const PollsCreateInputSchema: z.ZodType<Prisma.PollsCreateInput> = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  options: z.lazy(() => PollOptionsCreateNestedManyWithoutPollInputSchema).optional(),
  votes: z.lazy(() => PollVotesCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsCreateInputSchema;
