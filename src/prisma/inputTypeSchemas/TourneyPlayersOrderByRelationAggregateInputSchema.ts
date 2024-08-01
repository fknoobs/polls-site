import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyPlayersOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TourneyPlayersOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyPlayersOrderByRelationAggregateInputSchema;
