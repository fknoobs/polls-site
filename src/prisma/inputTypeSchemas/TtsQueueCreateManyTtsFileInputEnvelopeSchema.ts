import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueCreateManyTtsFileInputSchema } from './TtsQueueCreateManyTtsFileInputSchema';

export const TtsQueueCreateManyTtsFileInputEnvelopeSchema: z.ZodType<Prisma.TtsQueueCreateManyTtsFileInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TtsQueueCreateManyTtsFileInputSchema),z.lazy(() => TtsQueueCreateManyTtsFileInputSchema).array() ]),
}).strict();

export default TtsQueueCreateManyTtsFileInputEnvelopeSchema;
