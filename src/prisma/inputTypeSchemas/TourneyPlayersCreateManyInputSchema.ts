import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TourneyPlayersCreateManyInputSchema: z.ZodType<Prisma.TourneyPlayersCreateManyInput> = z.object({
  id: z.number().int().optional(),
  player: z.string().optional(),
  teamId: z.string()
}).strict();

export default TourneyPlayersCreateManyInputSchema;
