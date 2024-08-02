import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateNestedOneWithoutPlayersInputSchema } from './TourneyTeamsCreateNestedOneWithoutPlayersInputSchema';

export const TourneyPlayersCreateInputSchema: z.ZodType<Prisma.TourneyPlayersCreateInput> = z.object({
  player: z.string().optional(),
  team: z.lazy(() => TourneyTeamsCreateNestedOneWithoutPlayersInputSchema)
}).strict();

export default TourneyPlayersCreateInputSchema;
