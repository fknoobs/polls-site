import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PollOptionsUncheckedUpdateManyWithoutPollNestedInputSchema } from './PollOptionsUncheckedUpdateManyWithoutPollNestedInputSchema';
import { PollVotesUncheckedUpdateManyWithoutPollNestedInputSchema } from './PollVotesUncheckedUpdateManyWithoutPollNestedInputSchema';

export const PollsUncheckedUpdateInputSchema: z.ZodType<Prisma.PollsUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  options: z.lazy(() => PollOptionsUncheckedUpdateManyWithoutPollNestedInputSchema).optional(),
  votes: z.lazy(() => PollVotesUncheckedUpdateManyWithoutPollNestedInputSchema).optional()
}).strict();

export default PollsUncheckedUpdateInputSchema;
