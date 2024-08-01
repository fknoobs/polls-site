import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsQueueSumOrderByAggregateInputSchema: z.ZodType<Prisma.TtsQueueSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ttsFileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsQueueSumOrderByAggregateInputSchema;
