import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PollOptionsUpdateManyWithoutPollNestedInputSchema } from './PollOptionsUpdateManyWithoutPollNestedInputSchema';
import { PollVotesUpdateManyWithoutPollNestedInputSchema } from './PollVotesUpdateManyWithoutPollNestedInputSchema';

export const PollsUpdateInputSchema: z.ZodType<Prisma.PollsUpdateInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  options: z.lazy(() => PollOptionsUpdateManyWithoutPollNestedInputSchema).optional(),
  votes: z.lazy(() => PollVotesUpdateManyWithoutPollNestedInputSchema).optional()
}).strict();

export default PollsUpdateInputSchema;
