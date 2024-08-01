import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PollOptionsCountOrderByAggregateInputSchema } from './PollOptionsCountOrderByAggregateInputSchema';
import { PollOptionsAvgOrderByAggregateInputSchema } from './PollOptionsAvgOrderByAggregateInputSchema';
import { PollOptionsMaxOrderByAggregateInputSchema } from './PollOptionsMaxOrderByAggregateInputSchema';
import { PollOptionsMinOrderByAggregateInputSchema } from './PollOptionsMinOrderByAggregateInputSchema';
import { PollOptionsSumOrderByAggregateInputSchema } from './PollOptionsSumOrderByAggregateInputSchema';

export const PollOptionsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PollOptionsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PollOptionsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PollOptionsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PollOptionsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PollOptionsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PollOptionsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PollOptionsOrderByWithAggregationInputSchema;
