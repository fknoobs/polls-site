import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const TourneyPlayersScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TourneyPlayersScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyPlayersScalarWhereWithAggregatesInputSchema),z.lazy(() => TourneyPlayersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyPlayersScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyPlayersScalarWhereWithAggregatesInputSchema),z.lazy(() => TourneyPlayersScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  player: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  teamId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TourneyPlayersScalarWhereWithAggregatesInputSchema;
