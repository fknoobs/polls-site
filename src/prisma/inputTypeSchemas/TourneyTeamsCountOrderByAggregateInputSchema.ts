import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TourneyTeamsCountOrderByAggregateInputSchema: z.ZodType<Prisma.TourneyTeamsCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  tourneyId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TourneyTeamsCountOrderByAggregateInputSchema;
