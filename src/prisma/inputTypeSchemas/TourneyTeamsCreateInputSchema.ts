import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersCreateNestedManyWithoutTeamInputSchema } from './TourneyPlayersCreateNestedManyWithoutTeamInputSchema';
import { TourneysCreateNestedOneWithoutTeamsInputSchema } from './TourneysCreateNestedOneWithoutTeamsInputSchema';

export const TourneyTeamsCreateInputSchema: z.ZodType<Prisma.TourneyTeamsCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  players: z.lazy(() => TourneyPlayersCreateNestedManyWithoutTeamInputSchema).optional(),
  tourney: z.lazy(() => TourneysCreateNestedOneWithoutTeamsInputSchema)
}).strict();

export default TourneyTeamsCreateInputSchema;
