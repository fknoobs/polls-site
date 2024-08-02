import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesCreateManyPollInputSchema } from './PollVotesCreateManyPollInputSchema';

export const PollVotesCreateManyPollInputEnvelopeSchema: z.ZodType<Prisma.PollVotesCreateManyPollInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PollVotesCreateManyPollInputSchema),z.lazy(() => PollVotesCreateManyPollInputSchema).array() ]),
}).strict();

export default PollVotesCreateManyPollInputEnvelopeSchema;
