import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyTeamsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyTeamsAvgOrderByAggregateInput> = z.object({
  tourneyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyTeamsAvgOrderByAggregateInputSchema;
