import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsCreateWithoutTourneyInputSchema } from './TourneyTeamsCreateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedCreateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedCreateWithoutTourneyInputSchema';

export const TourneyTeamsCreateOrConnectWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsCreateOrConnectWithoutTourneyInput> = z.object({
  where: z.lazy(() => TourneyTeamsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema) ]),
}).strict();

export default TourneyTeamsCreateOrConnectWithoutTourneyInputSchema;
