import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersWhereUniqueInputSchema } from './TourneyPlayersWhereUniqueInputSchema';
import { TourneyPlayersUpdateWithoutTeamInputSchema } from './TourneyPlayersUpdateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedUpdateWithoutTeamInputSchema } from './TourneyPlayersUncheckedUpdateWithoutTeamInputSchema';

export const TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => TourneyPlayersWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TourneyPlayersUpdateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedUpdateWithoutTeamInputSchema) ]),
}).strict();

export default TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema;
