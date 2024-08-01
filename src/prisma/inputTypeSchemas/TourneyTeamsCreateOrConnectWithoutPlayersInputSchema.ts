import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsCreateWithoutPlayersInputSchema } from './TourneyTeamsCreateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedCreateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedCreateWithoutPlayersInputSchema';

export const TourneyTeamsCreateOrConnectWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsCreateOrConnectWithoutPlayersInput> = z.object({
  where: z.lazy(() => TourneyTeamsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutPlayersInputSchema) ]),
}).strict();

export default TourneyTeamsCreateOrConnectWithoutPlayersInputSchema;
