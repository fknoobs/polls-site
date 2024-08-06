import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersCreateWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersCreateWithoutTeamInput> = z.object({
  steamId: z.string().optional(),
  player: z.string().optional(),
  profile: z.string().optional(),
  timezone: z.string().optional()
}).strict();

export default TourneyPlayersCreateWithoutTeamInputSchema;
