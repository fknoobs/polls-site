import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { TourneyTeamsRelationFilterSchema } from './TourneyTeamsRelationFilterSchema';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';

export const TourneyPlayersWhereInputSchema: z.ZodType<Prisma.TourneyPlayersWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyPlayersWhereInputSchema),z.lazy(() => TourneyPlayersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyPlayersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyPlayersWhereInputSchema),z.lazy(() => TourneyPlayersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  steamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  player: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  profile: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  timezone: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  team: z.union([ z.lazy(() => TourneyTeamsRelationFilterSchema),z.lazy(() => TourneyTeamsWhereInputSchema) ]).optional(),
}).strict();

export default TourneyPlayersWhereInputSchema;
