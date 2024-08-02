import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollOptionsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.PollOptionsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollOptionsOrderByRelationAggregateInputSchema;
