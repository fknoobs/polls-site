import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PollVotesUpdateManyWithoutPollNestedInputSchema } from './PollVotesUpdateManyWithoutPollNestedInputSchema';

export const PollsUpdateWithoutOptionsInputSchema: z.ZodType<Prisma.PollsUpdateWithoutOptionsInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  votes: z.lazy(() => PollVotesUpdateManyWithoutPollNestedInputSchema).optional()
}).strict();

export default PollsUpdateWithoutOptionsInputSchema;
