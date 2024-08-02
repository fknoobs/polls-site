import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollOptionsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PollOptionsSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollOptionsSumOrderByAggregateInputSchema;
