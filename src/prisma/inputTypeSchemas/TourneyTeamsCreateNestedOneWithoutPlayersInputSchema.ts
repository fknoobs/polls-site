import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateWithoutPlayersInputSchema } from './TourneyTeamsCreateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedCreateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedCreateWithoutPlayersInputSchema';
import { TourneyTeamsCreateOrConnectWithoutPlayersInputSchema } from './TourneyTeamsCreateOrConnectWithoutPlayersInputSchema';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';

export const TourneyTeamsCreateNestedOneWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsCreateNestedOneWithoutPlayersInput> = z.object({
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutPlayersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourneyTeamsCreateOrConnectWithoutPlayersInputSchema).optional(),
  connect: z.lazy(() => TourneyTeamsWhereUniqueInputSchema).optional()
}).strict();

export default TourneyTeamsCreateNestedOneWithoutPlayersInputSchema;
