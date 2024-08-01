import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const PollVotesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PollVotesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PollVotesScalarWhereWithAggregatesInputSchema),z.lazy(() => PollVotesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollVotesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollVotesScalarWhereWithAggregatesInputSchema),z.lazy(() => PollVotesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  fingerprint: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  optionId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PollVotesScalarWhereWithAggregatesInputSchema;
