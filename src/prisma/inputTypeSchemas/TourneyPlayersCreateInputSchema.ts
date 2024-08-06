import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateNestedOneWithoutPlayersInputSchema } from './TourneyTeamsCreateNestedOneWithoutPlayersInputSchema';

export const TourneyPlayersCreateInputSchema: z.ZodType<Prisma.TourneyPlayersCreateInput> = z.object({
  steamId: z.string().optional(),
  player: z.string().optional(),
  profile: z.string().optional(),
  timezone: z.string().optional(),
  team: z.lazy(() => TourneyTeamsCreateNestedOneWithoutPlayersInputSchema)
}).strict();

export default TourneyPlayersCreateInputSchema;
