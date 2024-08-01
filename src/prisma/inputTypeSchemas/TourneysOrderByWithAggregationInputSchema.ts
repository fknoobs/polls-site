import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { TourneysCountOrderByAggregateInputSchema } from './TourneysCountOrderByAggregateInputSchema';
import { TourneysAvgOrderByAggregateInputSchema } from './TourneysAvgOrderByAggregateInputSchema';
import { TourneysMaxOrderByAggregateInputSchema } from './TourneysMaxOrderByAggregateInputSchema';
import { TourneysMinOrderByAggregateInputSchema } from './TourneysMinOrderByAggregateInputSchema';
import { TourneysSumOrderByAggregateInputSchema } from './TourneysSumOrderByAggregateInputSchema';

export const TourneysOrderByWithAggregationInputSchema: z.ZodType<Prisma.TourneysOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  rules: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  startDate: z.lazy(() => SortOrderSchema).optional(),
  endDate: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  registrationsOpen: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TourneysCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TourneysAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TourneysMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TourneysMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TourneysSumOrderByAggregateInputSchema).optional()
}).strict();

export default TourneysOrderByWithAggregationInputSchema;
