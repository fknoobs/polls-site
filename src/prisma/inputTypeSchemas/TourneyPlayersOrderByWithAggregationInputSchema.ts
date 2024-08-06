import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourneyPlayersCountOrderByAggregateInputSchema } from './TourneyPlayersCountOrderByAggregateInputSchema';
import { TourneyPlayersAvgOrderByAggregateInputSchema } from './TourneyPlayersAvgOrderByAggregateInputSchema';
import { TourneyPlayersMaxOrderByAggregateInputSchema } from './TourneyPlayersMaxOrderByAggregateInputSchema';
import { TourneyPlayersMinOrderByAggregateInputSchema } from './TourneyPlayersMinOrderByAggregateInputSchema';
import { TourneyPlayersSumOrderByAggregateInputSchema } from './TourneyPlayersSumOrderByAggregateInputSchema';

export const TourneyPlayersOrderByWithAggregationInputSchema: z.ZodType<Prisma.TourneyPlayersOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  steamId: z.lazy(() => SortOrderSchema).optional(),
  player: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TourneyPlayersCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TourneyPlayersAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TourneyPlayersMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TourneyPlayersMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TourneyPlayersSumOrderByAggregateInputSchema).optional()
}).strict();

export default TourneyPlayersOrderByWithAggregationInputSchema;
