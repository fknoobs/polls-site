import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TtsQueueScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TtsQueueScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TtsQueueScalarWhereWithAggregatesInputSchema),z.lazy(() => TtsQueueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsQueueScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsQueueScalarWhereWithAggregatesInputSchema),z.lazy(() => TtsQueueScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  ttsFileId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default TtsQueueScalarWhereWithAggregatesInputSchema;
