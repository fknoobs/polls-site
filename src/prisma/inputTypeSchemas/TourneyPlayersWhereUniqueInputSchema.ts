import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersWhereInputSchema } from './TourneyPlayersWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { TourneyTeamsRelationFilterSchema } from './TourneyTeamsRelationFilterSchema';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';

export const TourneyPlayersWhereUniqueInputSchema: z.ZodType<Prisma.TourneyPlayersWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TourneyPlayersWhereInputSchema),z.lazy(() => TourneyPlayersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyPlayersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyPlayersWhereInputSchema),z.lazy(() => TourneyPlayersWhereInputSchema).array() ]).optional(),
  player: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  team: z.union([ z.lazy(() => TourneyTeamsRelationFilterSchema),z.lazy(() => TourneyTeamsWhereInputSchema) ]).optional(),
}).strict());

export default TourneyPlayersWhereUniqueInputSchema;