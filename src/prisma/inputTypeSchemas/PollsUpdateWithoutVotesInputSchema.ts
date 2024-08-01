import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { PollOptionsUpdateManyWithoutPollNestedInputSchema } from './PollOptionsUpdateManyWithoutPollNestedInputSchema';

export const PollsUpdateWithoutVotesInputSchema: z.ZodType<Prisma.PollsUpdateWithoutVotesInput> = z.object({
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  slug: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  options: z.lazy(() => PollOptionsUpdateManyWithoutPollNestedInputSchema).optional()
}).strict();

export default PollsUpdateWithoutVotesInputSchema;
