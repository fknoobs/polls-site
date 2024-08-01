import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersWhereUniqueInputSchema } from './TourneyPlayersWhereUniqueInputSchema';
import { TourneyPlayersUpdateWithoutTeamInputSchema } from './TourneyPlayersUpdateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedUpdateWithoutTeamInputSchema } from './TourneyPlayersUncheckedUpdateWithoutTeamInputSchema';
import { TourneyPlayersCreateWithoutTeamInputSchema } from './TourneyPlayersCreateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedCreateWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateWithoutTeamInputSchema';

export const TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUpsertWithWhereUniqueWithoutTeamInput> = z.object({
  where: z.lazy(() => TourneyPlayersWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TourneyPlayersUpdateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedUpdateWithoutTeamInputSchema) ]),
  create: z.union([ z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema) ]),
}).strict();

export default TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema;
