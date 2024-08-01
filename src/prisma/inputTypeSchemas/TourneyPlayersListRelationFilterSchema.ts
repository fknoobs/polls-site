import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersWhereInputSchema } from './TourneyPlayersWhereInputSchema';

export const TourneyPlayersListRelationFilterSchema: z.ZodType<Prisma.TourneyPlayersListRelationFilter> = z.object({
  every: z.lazy(() => TourneyPlayersWhereInputSchema).optional(),
  some: z.lazy(() => TourneyPlayersWhereInputSchema).optional(),
  none: z.lazy(() => TourneyPlayersWhereInputSchema).optional()
}).strict();

export default TourneyPlayersListRelationFilterSchema;
