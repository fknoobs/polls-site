import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';

export const TourneysRelationFilterSchema: z.ZodType<Prisma.TourneysRelationFilter> = z.object({
  is: z.lazy(() => TourneysWhereInputSchema).optional(),
  isNot: z.lazy(() => TourneysWhereInputSchema).optional()
}).strict();

export default TourneysRelationFilterSchema;
