import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateNestedManyWithoutPollInputSchema } from './PollOptionsCreateNestedManyWithoutPollInputSchema';

export const PollsCreateWithoutVotesInputSchema: z.ZodType<Prisma.PollsCreateWithoutVotesInput> = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string().optional().nullable(),
  options: z.lazy(() => PollOptionsCreateNestedManyWithoutPollInputSchema).optional()
}).strict();

export default PollsCreateWithoutVotesInputSchema;
