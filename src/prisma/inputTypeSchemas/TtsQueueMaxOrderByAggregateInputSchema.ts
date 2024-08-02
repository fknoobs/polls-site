import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsQueueMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TtsQueueMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ttsFileId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsQueueMaxOrderByAggregateInputSchema;
