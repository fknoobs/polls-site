import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollOptionsMinOrderByAggregateInputSchema: z.ZodType<Prisma.PollOptionsMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollOptionsMinOrderByAggregateInputSchema;
