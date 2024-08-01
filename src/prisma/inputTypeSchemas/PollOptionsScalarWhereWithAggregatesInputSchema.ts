import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const PollOptionsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PollOptionsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PollOptionsScalarWhereWithAggregatesInputSchema),z.lazy(() => PollOptionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollOptionsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollOptionsScalarWhereWithAggregatesInputSchema),z.lazy(() => PollOptionsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default PollOptionsScalarWhereWithAggregatesInputSchema;
