import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TourneyTeamsUncheckedCreateInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  tourneyId: z.number().int(),
  players: z.lazy(() => TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export default TourneyTeamsUncheckedCreateInputSchema;
