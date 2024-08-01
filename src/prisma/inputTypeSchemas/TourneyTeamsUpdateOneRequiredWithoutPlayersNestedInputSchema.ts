import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateWithoutPlayersInputSchema } from './TourneyTeamsCreateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedCreateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedCreateWithoutPlayersInputSchema';
import { TourneyTeamsCreateOrConnectWithoutPlayersInputSchema } from './TourneyTeamsCreateOrConnectWithoutPlayersInputSchema';
import { TourneyTeamsUpsertWithoutPlayersInputSchema } from './TourneyTeamsUpsertWithoutPlayersInputSchema';
import { TourneyTeamsWhereUniqueInputSchema } from './TourneyTeamsWhereUniqueInputSchema';
import { TourneyTeamsUpdateToOneWithWhereWithoutPlayersInputSchema } from './TourneyTeamsUpdateToOneWithWhereWithoutPlayersInputSchema';
import { TourneyTeamsUpdateWithoutPlayersInputSchema } from './TourneyTeamsUpdateWithoutPlayersInputSchema';
import { TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema } from './TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema';

export const TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourneyTeamsCreateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedCreateWithoutPlayersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourneyTeamsCreateOrConnectWithoutPlayersInputSchema).optional(),
  upsert: z.lazy(() => TourneyTeamsUpsertWithoutPlayersInputSchema).optional(),
  connect: z.lazy(() => TourneyTeamsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TourneyTeamsUpdateToOneWithWhereWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUpdateWithoutPlayersInputSchema),z.lazy(() => TourneyTeamsUncheckedUpdateWithoutPlayersInputSchema) ]).optional(),
}).strict();

export default TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema;
