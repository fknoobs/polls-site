import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PollsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  minChoices: z.lazy(() => SortOrderSchema).optional(),
  maxChoices: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollsSumOrderByAggregateInputSchema;
