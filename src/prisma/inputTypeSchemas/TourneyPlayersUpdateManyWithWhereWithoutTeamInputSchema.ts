import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersScalarWhereInputSchema } from './TourneyPlayersScalarWhereInputSchema';
import { TourneyPlayersUpdateManyMutationInputSchema } from './TourneyPlayersUpdateManyMutationInputSchema';
import { TourneyPlayersUncheckedUpdateManyWithoutTeamInputSchema } from './TourneyPlayersUncheckedUpdateManyWithoutTeamInputSchema';

export const TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateManyWithWhereWithoutTeamInput> = z.object({
  where: z.lazy(() => TourneyPlayersScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TourneyPlayersUpdateManyMutationInputSchema),z.lazy(() => TourneyPlayersUncheckedUpdateManyWithoutTeamInputSchema) ]),
}).strict();

export default TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema;
