import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateWithoutTourneyInputSchema } from './TourneyTeamsCreateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedCreateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedCreateWithoutTourneyInputSchema';
import { TourneyTeamsCreateOrConnectWithoutTourneyInputSchema } from './TourneyTeamsCreateOrConnectWithoutTourneyInputSchema';
import { TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema } from './TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema';
import { TourneyTeamsCreateManyTourneyInputEnvelopeSchema } from './TourneyTeamsCreateManyTourneyInputEnvelopeSchema';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema } from './TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema';
import { TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema } from './TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema';
import { TourneyTeamsScalarWhereInputSchema } from './TourneyTeamsScalarWhereInputSchema';

export const TourneyTeamsUpdateManyWithoutTourneyNestedInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateManyWithoutTourneyNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema).array(),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneyTeamsCreateOrConnectWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsCreateOrConnectWithoutTourneyInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneyTeamsCreateManyTourneyInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TourneyTeamsWhereUniqueInputSchema),z.lazy(() => TourneyTeamsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TourneyTeamsWhereUniqueInputSchema),z.lazy(() => TourneyTeamsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TourneyTeamsWhereUniqueInputSchema),z.lazy(() => TourneyTeamsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TourneyTeamsWhereUniqueInputSchema),z.lazy(() => TourneyTeamsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUpdateManyWithWhereWithoutTourneyInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TourneyTeamsScalarWhereInputSchema),z.lazy(() => TourneyTeamsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TourneyTeamsUpdateManyWithoutTourneyNestedInputSchema;
