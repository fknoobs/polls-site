import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollsUpdateOneRequiredWithoutVotesNestedInputSchema } from './PollsUpdateOneRequiredWithoutVotesNestedInputSchema';

export const PollVotesUpdateWithoutOptionInputSchema: z.ZodType<Prisma.PollVotesUpdateWithoutOptionInput> = z.object({
  fingerprint: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poll: z.lazy(() => PollsUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default PollVotesUpdateWithoutOptionInputSchema;
