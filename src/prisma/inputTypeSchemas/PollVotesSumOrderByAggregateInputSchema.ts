import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollVotesSumOrderByAggregateInputSchema: z.ZodType<Prisma.PollVotesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  optionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollVotesSumOrderByAggregateInputSchema;
