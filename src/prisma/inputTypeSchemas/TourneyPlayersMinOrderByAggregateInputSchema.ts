import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyPlayersMinOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyPlayersMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  player: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyPlayersMinOrderByAggregateInputSchema;
