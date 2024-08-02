import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';

export const TourneyTeamsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TourneyTeamsScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyTeamsScalarWhereWithAggregatesInputSchema),z.lazy(() => TourneyTeamsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyTeamsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyTeamsScalarWhereWithAggregatesInputSchema),z.lazy(() => TourneyTeamsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  tourneyId: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
}).strict();

export default TourneyTeamsScalarWhereWithAggregatesInputSchema;
