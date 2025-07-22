import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TourneyPlayersListRelationFilterSchema } from './TourneyPlayersListRelationFilterSchema';
import { TourneysScalarRelationFilterSchema } from './TourneysScalarRelationFilterSchema';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';

export const TourneyTeamsWhereUniqueInputSchema: z.ZodType<Prisma.TourneyTeamsWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    name: z.string()
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    name: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional(),
  AND: z.union([ z.lazy(() => TourneyTeamsWhereInputSchema),z.lazy(() => TourneyTeamsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyTeamsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyTeamsWhereInputSchema),z.lazy(() => TourneyTeamsWhereInputSchema).array() ]).optional(),
  tourneyId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  players: z.lazy(() => TourneyPlayersListRelationFilterSchema).optional(),
  tourney: z.union([ z.lazy(() => TourneysScalarRelationFilterSchema),z.lazy(() => TourneysWhereInputSchema) ]).optional(),
}).strict());

export default TourneyTeamsWhereUniqueInputSchema;
