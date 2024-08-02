import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema } from './PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema';

export const PollOptionsUncheckedCreateWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUncheckedCreateWithoutPollInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  votes: z.lazy(() => PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema).optional()
}).strict();

export default PollOptionsUncheckedCreateWithoutPollInputSchema;
