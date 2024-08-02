import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollVotesUncheckedUpdateManyWithoutOptionNestedInputSchema } from './PollVotesUncheckedUpdateManyWithoutOptionNestedInputSchema';

export const PollOptionsUncheckedUpdateInputSchema: z.ZodType<Prisma.PollOptionsUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  pollId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  votes: z.lazy(() => PollVotesUncheckedUpdateManyWithoutOptionNestedInputSchema).optional()
}).strict();

export default PollOptionsUncheckedUpdateInputSchema;
