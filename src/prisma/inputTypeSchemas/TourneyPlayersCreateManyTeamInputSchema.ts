import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersCreateManyTeamInputSchema: z.ZodType<Prisma.TourneyPlayersCreateManyTeamInput> = z.object({
  id: z.number().int().optional(),
  steamId: z.string().optional(),
  player: z.string().optional(),
  profile: z.string().optional(),
  timezone: z.string().optional()
}).strict();

export default TourneyPlayersCreateManyTeamInputSchema;
