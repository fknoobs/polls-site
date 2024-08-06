import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyPlayersCountOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyPlayersCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  steamId: z.lazy(() => SortOrderSchema).optional(),
  player: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyPlayersCountOrderByAggregateInputSchema;
