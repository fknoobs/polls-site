import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateNestedManyWithoutOptionInputSchema } from './PollVotesCreateNestedManyWithoutOptionInputSchema';

export const PollOptionsCreateWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsCreateWithoutPollInput> = z.object({
  name: z.string(),
  votes: z.lazy(() => PollVotesCreateNestedManyWithoutOptionInputSchema).optional()
}).strict();

export default PollOptionsCreateWithoutPollInputSchema;
