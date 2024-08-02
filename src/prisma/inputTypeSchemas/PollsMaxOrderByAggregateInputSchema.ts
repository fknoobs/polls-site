import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollsMaxOrderByAggregateInputSchema: z.ZodType<Prisma.PollsMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  multiple: z.lazy(() => SortOrderSchema).optional(),
  minChoices: z.lazy(() => SortOrderSchema).optional(),
  maxChoices: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollsMaxOrderByAggregateInputSchema;
