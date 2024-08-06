import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TourneyTeamsOrderByWithRelationInputSchema } from './TourneyTeamsOrderByWithRelationInputSchema';

export const TourneyPlayersOrderByWithRelationInputSchema: z.ZodType<Prisma.TourneyPlayersOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  steamId: z.lazy(() => SortOrderSchema).optional(),
  player: z.lazy(() => SortOrderSchema).optional(),
  profile: z.lazy(() => SortOrderSchema).optional(),
  timezone: z.lazy(() => SortOrderSchema).optional(),
  teamId: z.lazy(() => SortOrderSchema).optional(),
  team: z.lazy(() => TourneyTeamsOrderByWithRelationInputSchema).optional()
}).strict();

export default TourneyPlayersOrderByWithRelationInputSchema;
