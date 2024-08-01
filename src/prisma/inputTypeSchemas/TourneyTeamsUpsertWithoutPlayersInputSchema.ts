import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsUpdateWithoutPlayersInputSchema } from './TourneyTeamsUpdateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema';
import { TourneyTeamsCreateWithoutPlayersInputSchema } from './TourneyTeamsCreateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedCreateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedCreateWithoutPlayersInputSchema';
import { TourneyTeamsWhereInputSchema } from './TourneyTeamsWhereInputSchema';

export const TourneyTeamsUpsertWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsUpsertWithoutPlayersInput> = z.object({
  update: z.union([ z.lazy(() => TourneyTeamsUpdateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema) ]),
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutPlayersInputSchema) ]),
  where: z.lazy(() => TourneyTeamsWhereInputSchema).optional()
}).strict();

export default TourneyTeamsUpsertWithoutPlayersInputSchema;
