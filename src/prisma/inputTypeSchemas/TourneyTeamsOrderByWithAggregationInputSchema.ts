import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourneyTeamsCountOrderByAggregateInputSchema } from './TourneyTeamsCountOrderByAggregateInputSchema';
import { TourneyTeamsAvgOrderByAggregateInputSchema } from './TourneyTeamsAvgOrderByAggregateInputSchema';
import { TourneyTeamsMaxOrderByAggregateInputSchema } from './TourneyTeamsMaxOrderByAggregateInputSchema';
import { TourneyTeamsMinOrderByAggregateInputSchema } from './TourneyTeamsMinOrderByAggregateInputSchema';
import { TourneyTeamsSumOrderByAggregateInputSchema } from './TourneyTeamsSumOrderByAggregateInputSchema';

export const TourneyTeamsOrderByWithAggregationInputSchema: z.ZodType<Prisma.TourneyTeamsOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tourneyId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TourneyTeamsCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TourneyTeamsAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TourneyTeamsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TourneyTeamsMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TourneyTeamsSumOrderByAggregateInputSchema).optional()
}).strict();

export default TourneyTeamsOrderByWithAggregationInputSchema;
