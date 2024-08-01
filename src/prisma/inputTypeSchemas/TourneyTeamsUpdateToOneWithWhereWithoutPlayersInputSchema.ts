import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';
import { TourneyTeamsUpdateWithoutPlayersInputSchema } from './TourneyTeamsUpdateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema';

export const TourneyTeamsUpdateToOneWithWhereWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateToOneWithWhereWithoutPlayersInput> = z.object({
  where: z.lazy(() => TourneyTeamsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TourneyTeamsUpdateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema) ]),
}).strict();

export default TourneyTeamsUpdateToOneWithWhereWithoutPlayersInputSchema;
