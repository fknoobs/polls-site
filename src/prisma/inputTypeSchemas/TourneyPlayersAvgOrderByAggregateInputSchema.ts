import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyPlayersAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyPlayersAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyPlayersAvgOrderByAggregateInputSchema;
