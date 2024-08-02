import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollVotesUpdateManyWithoutOptionNestedInputSchema } from './PollVotesUpdateManyWithoutOptionNestedInputSchema';

export const PollOptionsUpdateWithoutPollInputSchema: z.ZodType<Prisma.PollOptionsUpdateWithoutPollInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.lazy(() => PollVotesUpdateManyWithoutOptionNestedInputSchema).optional()
}).strict();

export default PollOptionsUpdateWithoutPollInputSchema;
