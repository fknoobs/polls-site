import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PollOptionsOrderByRelationAggregateInputSchema } from './PollOptionsOrderByRelationAggregateInputSchema';
import { PollVotesOrderByRelationAggregateInputSchema } from './PollVotesOrderByRelationAggregateInputSchema';

export const PollsOrderByWithRelationInputSchema: z.ZodType<Prisma.PollsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  slug: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  multiple: z.lazy(() => SortOrderSchema).optional(),
  minChoices: z.lazy(() => SortOrderSchema).optional(),
  maxChoices: z.lazy(() => SortOrderSchema).optional(),
  options: z.lazy(() => PollOptionsOrderByRelationAggregateInputSchema).optional(),
  votes: z.lazy(() => PollVotesOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PollsOrderByWithRelationInputSchema;
