import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersCreateWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersCreateWithoutTeamInput> = z.object({
  player: z.string().optional()
}).strict();

export default TourneyPlayersCreateWithoutTeamInputSchema;
