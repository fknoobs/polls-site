import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateNestedManyWithoutPollInputSchema } from './PollVotesCreateNestedManyWithoutPollInputSchema';

export const PollsCreateWithoutOptionsInputSchema: z.ZodType<Prisma.PollsCreateWithoutOptionsInput> = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  votes: z.lazy(() => PollVotesCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsCreateWithoutOptionsInputSchema;
