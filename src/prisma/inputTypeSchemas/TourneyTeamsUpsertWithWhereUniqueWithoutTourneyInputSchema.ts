import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsUpdateWithoutTourneyInputSchema } from './TourneyTeamsUpdateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema';
import { TourneyTeamsCreateWithoutTourneyInputSchema } from './TourneyTeamsCreateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedCreateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedCreateWithoutTourneyInputSchema';

export const TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInput> = z.object({
  where: z.lazy(() => TourneyTeamsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TourneyTeamsUpdateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema) ]),
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutTourneyInputSchema) ]),
}).strict();

export default TourneyTeamsUpsertWithWhereUniqueWithoutTourneyInputSchema;
