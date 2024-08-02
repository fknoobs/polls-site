import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersCreateWithoutTeamInputSchema } from './TourneyPlayersCreateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedCreateWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateWithoutTeamInputSchema';
import { TourneyPlayersCreateOrConnectWithoutTeamInputSchema } from './TourneyPlayersCreateOrConnectWithoutTeamInputSchema';
import { TourneyPlayersCreateManyTeamInputEnvelopeSchema } from './TourneyPlayersCreateManyTeamInputEnvelopeSchema';
import { TourneyPlayersWhereUniqueInputSchema } from './TourneyPlayersWhereUniqueInputSchema';

export const TourneyPlayersCreateNestedManyWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersCreateNestedManyWithoutTeamInput> = z.object({
  create: z.union([ z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema).array(),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneyPlayersCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TourneyPlayersCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneyPlayersCreateManyTeamInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TourneyPlayersWhereUniqueInputSchema),z.lazy(() => TourneyPlayersWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TourneyPlayersCreateNestedManyWithoutTeamInputSchema;
