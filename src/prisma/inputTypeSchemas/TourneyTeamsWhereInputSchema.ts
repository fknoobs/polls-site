import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TourneyPlayersListRelationFilterSchema } from './TourneyPlayersListRelationFilterSchema';
import { TourneysRelationFilterSchema } from './TourneysRelationFilterSchema';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';

export const TourneyTeamsWhereInputSchema: z.ZodType<Prisma.TourneyTeamsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyTeamsWhereInputSchema),z.lazy(() => TourneyTeamsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyTeamsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyTeamsWhereInputSchema),z.lazy(() => TourneyTeamsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tourneyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  players: z.lazy(() => TourneyPlayersListRelationFilterSchema).optional(),
  tourney: z.union([ z.lazy(() => TourneysRelationFilterSchema),z.lazy(() => TourneysWhereInputSchema) ]).optional(),
}).strict();

export default TourneyTeamsWhereInputSchema;
