import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';

export const PollsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.PollsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => PollsScalarWhereWithAggregatesInputSchema),z.lazy(() => PollsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollsScalarWhereWithAggregatesInputSchema),z.lazy(() => PollsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default PollsScalarWhereWithAggregatesInputSchema;
