import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyPlayersSumOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyPlayersSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyPlayersSumOrderByAggregateInputSchema;
