import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsQueueAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TtsQueueAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ttsFileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsQueueAvgOrderByAggregateInputSchema;
