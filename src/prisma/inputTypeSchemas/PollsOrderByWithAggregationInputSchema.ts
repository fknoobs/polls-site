import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PollsCountOrderByAggregateInputSchema } from './PollsCountOrderByAggregateInputSchema';
import { PollsAvgOrderByAggregateInputSchema } from './PollsAvgOrderByAggregateInputSchema';
import { PollsMaxOrderByAggregateInputSchema } from './PollsMaxOrderByAggregateInputSchema';
import { PollsMinOrderByAggregateInputSchema } from './PollsMinOrderByAggregateInputSchema';
import { PollsSumOrderByAggregateInputSchema } from './PollsSumOrderByAggregateInputSchema';

export const PollsOrderByWithAggregationInputSchema: z.ZodType<Prisma.PollsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  multiple: z.lazy(() => SortOrderSchema).optional(),
  minChoices: z.lazy(() => SortOrderSchema).optional(),
  maxChoices: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PollsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PollsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PollsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PollsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PollsSumOrderByAggregateInputSchema).optional()
}).strict();

export default PollsOrderByWithAggregationInputSchema;
