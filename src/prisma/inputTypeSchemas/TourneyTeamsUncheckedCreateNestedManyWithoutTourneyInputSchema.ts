import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateWithoutTourneyInputSchema } from './TourneyTeamsCreateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedCreateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedCreateWithoutTourneyInputSchema';
import { TourneyTeamsCreateOrConnectWithoutTourneyInputSchema } from './TourneyTeamsCreateOrConnectWithoutTourneyInputSchema';
import { TourneyTeamsCreateManyTourneyInputEnvelopeSchema } from './TourneyTeamsCreateManyTourneyInputEnvelopeSchema';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';

export const TourneyTeamsUncheckedCreateNestedManyWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedCreateNestedManyWithoutTourneyInput> = z.object({
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema).array(),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneyTeamsCreateOrConnectWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsCreateOrConnectWithoutTourneyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneyTeamsCreateManyTourneyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TourneyTeamsWhereUniqueInputSchema),z.lazy(() => TourneyTeamsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TourneyTeamsUncheckedCreateNestedManyWithoutTourneyInputSchema;
