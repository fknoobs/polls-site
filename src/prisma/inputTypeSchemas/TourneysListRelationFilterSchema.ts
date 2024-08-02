import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';

export const TourneysListRelationFilterSchema: z.ZodType<Prisma.TourneysListRelationFilter> = z.object({
  every: z.lazy(() => TourneysWhereInputSchema).optional(),
  some: z.lazy(() => TourneysWhereInputSchema).optional(),
  none: z.lazy(() => TourneysWhereInputSchema).optional()
}).strict();

export default TourneysListRelationFilterSchema;
