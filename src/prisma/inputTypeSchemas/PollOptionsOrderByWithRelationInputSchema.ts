import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PollsOrderByWithRelationInputSchema } from './PollsOrderByWithRelationInputSchema';
import { PollVotesOrderByRelationAggregateInputSchema } from './PollVotesOrderByRelationAggregateInputSchema';

export const PollOptionsOrderByWithRelationInputSchema: z.ZodType<Prisma.PollOptionsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  poll: z.lazy(() => PollsOrderByWithRelationInputSchema).optional(),
  votes: z.lazy(() => PollVotesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PollOptionsOrderByWithRelationInputSchema;
