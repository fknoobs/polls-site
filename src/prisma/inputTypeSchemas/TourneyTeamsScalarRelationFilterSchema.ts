import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';

export const TourneyTeamsScalarRelationFilterSchema: z.ZodType<Prisma.TourneyTeamsScalarRelationFilter> = z.object({
  is: z.lazy(() => TourneyTeamsWhereInputSchema).optional(),
  isNot: z.lazy(() => TourneyTeamsWhereInputSchema).optional()
}).strict();

export default TourneyTeamsScalarRelationFilterSchema;
