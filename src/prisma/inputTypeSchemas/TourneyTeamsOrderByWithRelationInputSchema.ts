import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourneyPlayersOrderByRelationAggregateInputSchema } from './TourneyPlayersOrderByRelationAggregateInputSchema';
import { TourneysOrderByWithRelationInputSchema } from './TourneysOrderByWithRelationInputSchema';

export const TourneyTeamsOrderByWithRelationInputSchema: z.ZodType<Prisma.TourneyTeamsOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tourneyId: z.lazy(() => SortOrderSchema).optional(),
  players: z.lazy(() => TourneyPlayersOrderByRelationAggregateInputSchema).optional(),
  tourney: z.lazy(() => TourneysOrderByWithRelationInputSchema).optional()
}).strict();

export default TourneyTeamsOrderByWithRelationInputSchema;
