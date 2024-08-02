import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersCreateNestedManyWithoutTeamInputSchema } from './TourneyPlayersCreateNestedManyWithoutTeamInputSchema';

export const TourneyTeamsCreateWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsCreateWithoutTourneyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  players: z.lazy(() => TourneyPlayersCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export default TourneyTeamsCreateWithoutTourneyInputSchema;
