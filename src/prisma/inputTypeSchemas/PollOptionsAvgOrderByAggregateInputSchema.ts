import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollOptionsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PollOptionsAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollOptionsAvgOrderByAggregateInputSchema;