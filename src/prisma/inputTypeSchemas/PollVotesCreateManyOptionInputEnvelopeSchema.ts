import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateManyOptionInputSchema } from './PollVotesCreateManyOptionInputSchema';

export const PollVotesCreateManyOptionInputEnvelopeSchema: z.ZodType<Prisma.PollVotesCreateManyOptionInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PollVotesCreateManyOptionInputSchema),z.lazy(() => PollVotesCreateManyOptionInputSchema).array() ]),
}).strict();

export default PollVotesCreateManyOptionInputEnvelopeSchema;
