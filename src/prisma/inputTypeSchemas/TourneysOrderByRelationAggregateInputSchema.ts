import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneysOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TourneysOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneysOrderByRelationAggregateInputSchema;
