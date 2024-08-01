import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsCreateManyPollInputSchema } from './PollOptionsCreateManyPollInputSchema';

export const PollOptionsCreateManyPollInputEnvelopeSchema: z.ZodType<Prisma.PollOptionsCreateManyPollInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => PollOptionsCreateManyPollInputSchema),z.lazy(() => PollOptionsCreateManyPollInputSchema).array() ]),
}).strict();

export default PollOptionsCreateManyPollInputEnvelopeSchema;
