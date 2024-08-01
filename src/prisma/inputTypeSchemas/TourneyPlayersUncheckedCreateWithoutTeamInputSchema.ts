import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersUncheckedCreateWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUncheckedCreateWithoutTeamInput> = z.object({
  id: z.number().int().optional(),
  player: z.string().optional()
}).strict();

export default TourneyPlayersUncheckedCreateWithoutTeamInputSchema;
