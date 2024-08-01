import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersCreateWithoutTeamInputSchema } from './TourneyPlayersCreateWithoutTeamInputSchema';
import { TourneyPlayersUncheckedCreateWithoutTeamInputSchema } from './TourneyPlayersUncheckedCreateWithoutTeamInputSchema';
import { TourneyPlayersCreateOrConnectWithoutTeamInputSchema } from './TourneyPlayersCreateOrConnectWithoutTeamInputSchema';
import { TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema } from './TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema';
import { TourneyPlayersCreateManyTeamInputEnvelopeSchema } from './TourneyPlayersCreateManyTeamInputEnvelopeSchema';
import { TourneyPlayersWhereUniqueInputSchema } from './TourneyPlayersWhereUniqueInputSchema';
import { TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema } from './TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema';
import { TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema } from './TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema';
import { TourneyPlayersScalarWhereInputSchema } from './TourneyPlayersScalarWhereInputSchema';

export const TourneyPlayersUpdateManyWithoutTeamNestedInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateManyWithoutTeamNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersCreateWithoutTeamInputSchema).array(),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUncheckedCreateWithoutTeamInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneyPlayersCreateOrConnectWithoutTeamInputSchema),z.lazy(() => TourneyPlayersCreateOrConnectWithoutTeamInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUpsertWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneyPlayersCreateManyTeamInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TourneyPlayersWhereUniqueInputSchema),z.lazy(() => TourneyPlayersWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TourneyPlayersWhereUniqueInputSchema),z.lazy(() => TourneyPlayersWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TourneyPlayersWhereUniqueInputSchema),z.lazy(() => TourneyPlayersWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TourneyPlayersWhereUniqueInputSchema),z.lazy(() => TourneyPlayersWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUpdateWithWhereUniqueWithoutTeamInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema),z.lazy(() => TourneyPlayersUpdateManyWithWhereWithoutTeamInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TourneyPlayersScalarWhereInputSchema),z.lazy(() => TourneyPlayersScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TourneyPlayersUpdateManyWithoutTeamNestedInputSchema;
