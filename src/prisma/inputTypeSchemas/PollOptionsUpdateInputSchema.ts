import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollsUpdateOneRequiredWithoutOptionsNestedInputSchema } from './PollsUpdateOneRequiredWithoutOptionsNestedInputSchema';
import { PollVotesUpdateManyWithoutOptionNestedInputSchema } from './PollVotesUpdateManyWithoutOptionNestedInputSchema';

export const PollOptionsUpdateInputSchema: z.ZodType<Prisma.PollOptionsUpdateInput> = z.object({
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poll: z.lazy(() => PollsUpdateOneRequiredWithoutOptionsNestedInputSchema).optional(),
  votes: z.lazy(() => PollVotesUpdateManyWithoutOptionNestedInputSchema).optional()
}).strict();

export default PollOptionsUpdateInputSchema;
