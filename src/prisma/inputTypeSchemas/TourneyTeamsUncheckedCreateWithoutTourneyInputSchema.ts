import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema';

export const TourneyTeamsUncheckedCreateWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedCreateWithoutTourneyInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  players: z.lazy(() => TourneyPlayersUncheckedCreateNestedManyWithoutTeamInputSchema).optional()
}).strict();

export default TourneyTeamsUncheckedCreateWithoutTourneyInputSchema;
