import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneysAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TourneysAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneysAvgOrderByAggregateInputSchema;