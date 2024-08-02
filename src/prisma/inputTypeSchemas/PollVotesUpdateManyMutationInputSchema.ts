import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const PollVotesUpdateManyMutationInputSchema: z.ZodType<Prisma.PollVotesUpdateManyMutationInput> = z.object({
  fingerprint: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  ipaddress: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default PollVotesUpdateManyMutationInputSchema;
