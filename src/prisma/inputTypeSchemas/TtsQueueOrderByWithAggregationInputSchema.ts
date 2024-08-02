import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TtsQueueCountOrderByAggregateInputSchema } from './TtsQueueCountOrderByAggregateInputSchema';
import { TtsQueueAvgOrderByAggregateInputSchema } from './TtsQueueAvgOrderByAggregateInputSchema';
import { TtsQueueMaxOrderByAggregateInputSchema } from './TtsQueueMaxOrderByAggregateInputSchema';
import { TtsQueueMinOrderByAggregateInputSchema } from './TtsQueueMinOrderByAggregateInputSchema';
import { TtsQueueSumOrderByAggregateInputSchema } from './TtsQueueSumOrderByAggregateInputSchema';

export const TtsQueueOrderByWithAggregationInputSchema: z.ZodType<Prisma.TtsQueueOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ttsFileId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TtsQueueCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TtsQueueAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TtsQueueMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TtsQueueMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TtsQueueSumOrderByAggregateInputSchema).optional()
}).strict();

export default TtsQueueOrderByWithAggregationInputSchema;
