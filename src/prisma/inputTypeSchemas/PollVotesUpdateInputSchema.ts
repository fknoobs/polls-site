import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollsUpdateOneRequiredWithoutVotesNestedInputSchema } from './PollsUpdateOneRequiredWithoutVotesNestedInputSchema';
import { PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema } from './PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema';

export const PollVotesUpdateInputSchema: z.ZodType<Prisma.PollVotesUpdateInput> = z.object({
  fingerprint: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ipaddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  poll: z.lazy(() => PollsUpdateOneRequiredWithoutVotesNestedInputSchema).optional(),
  option: z.lazy(() => PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default PollVotesUpdateInputSchema;
