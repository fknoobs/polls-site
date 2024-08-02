import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsUpdateWithoutTourneyInputSchema } from './TourneyTeamsUpdateWithoutTourneyInputSchema';
import { TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema } from './TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema';

export const TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInput> = z.object({
  where: z.lazy(() => TourneyTeamsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TourneyTeamsUpdateWithoutTourneyInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema) ]),
}).strict();

export default TourneyTeamsUpdateWithWhereUniqueWithoutTourneyInputSchema;
