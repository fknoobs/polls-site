import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema } from './PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema';

export const PollVotesUpdateWithoutPollInputSchema: z.ZodType<Prisma.PollVotesUpdateWithoutPollInput> = z.object({
  fingerprint: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ipaddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  option: z.lazy(() => PollOptionsUpdateOneRequiredWithoutVotesNestedInputSchema).optional()
}).strict();

export default PollVotesUpdateWithoutPollInputSchema;
