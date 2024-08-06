import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersUncheckedCreateInputSchema: z.ZodType<Prisma.TourneyPlayersUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  steamId: z.string().optional(),
  player: z.string().optional(),
  profile: z.string().optional(),
  timezone: z.string().optional(),
  teamId: z.string()
}).strict();

export default TourneyPlayersUncheckedCreateInputSchema;
