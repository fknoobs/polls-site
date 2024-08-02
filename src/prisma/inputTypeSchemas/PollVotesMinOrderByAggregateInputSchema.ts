import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PollVotesMinOrderByAggregateInputSchema: z.ZodType<Prisma.PollVotesMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fingerprint: z.lazy(() => SortOrderSchema).optional(),
  ipaddress: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  optionId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PollVotesMinOrderByAggregateInputSchema;
