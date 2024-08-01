import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';

export const TourneyTeamsListRelationFilterSchema: z.ZodType<Prisma.TourneyTeamsListRelationFilter> = z.object({
  every: z.lazy(() => TourneyTeamsWhereInputSchema).optional(),
  some: z.lazy(() => TourneyTeamsWhereInputSchema).optional(),
  none: z.lazy(() => TourneyTeamsWhereInputSchema).optional()
}).strict();

export default TourneyTeamsListRelationFilterSchema;
