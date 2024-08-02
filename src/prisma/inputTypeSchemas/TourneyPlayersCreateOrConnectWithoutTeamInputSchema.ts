import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersWhereUniqueInputSchema } from './TourneyPlayersWhereUniqueInputSchema';
import { TourneyPlayersCreateWithoutTeamInputSchema } from './TourneyPlayersCreateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedCreateWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateWithoutTeamInputSchema';

export const TourneyPlayersCreateOrConnectWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersCreateOrConnectWithoutTeamInput> = z.object({
  where: z.lazy(() => TourneyPlayersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export default TourneyPlayersCreateOrConnectWithoutTeamInputSchema;
