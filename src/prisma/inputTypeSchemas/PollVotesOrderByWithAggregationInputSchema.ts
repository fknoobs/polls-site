import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PollVotesCountOrderByAggregateInputSchema } from './PollVotesCountOrderByAggregateInputSchema';
import { PollVotesAvgOrderByAggregateInputSchema } from './PollVotesAvgOrderByAggregateInputSchema';
import { PollVotesMaxOrderByAggregateInputSchema } from './PollVotesMaxOrderByAggregateInputSchema';
import { PollVotesMinOrderByAggregateInputSchema } from './PollVotesMinOrderByAggregateInputSchema';
import { PollVotesSumOrderByAggregateInputSchema } from './PollVotesSumOrderByAggregateInputSchema';

export const PollVotesOrderByWithAggregationInputSchema: z.ZodType<Prisma.PollVotesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fingerprint: z.lazy(() => SortOrderSchema).optional(),
  ipaddress: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  optionId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => PollVotesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => PollVotesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => PollVotesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => PollVotesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => PollVotesSumOrderByAggregateInputSchema).optional()
}).strict();

export default PollVotesOrderByWithAggregationInputSchema;
