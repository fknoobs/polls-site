import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyTeamsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.TourneyTeamsOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyTeamsOrderByRelationAggregateInputSchema;
