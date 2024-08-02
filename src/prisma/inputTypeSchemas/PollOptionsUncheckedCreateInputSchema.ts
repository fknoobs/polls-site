import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema } from './PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema';

export const PollOptionsUncheckedCreateInputSchema: z.ZodType<Prisma.PollOptionsUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  pollId: z.number().int(),
  votes: z.lazy(() => PollVotesUncheckedCreateNestedManyWithoutOptionInputSchema).optional()
}).strict();

export default PollOptionsUncheckedCreateInputSchema;
