import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyTeamsSumOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyTeamsSumOrderByAggregateInput> = z.object({
  tourneyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyTeamsSumOrderByAggregateInputSchema;
