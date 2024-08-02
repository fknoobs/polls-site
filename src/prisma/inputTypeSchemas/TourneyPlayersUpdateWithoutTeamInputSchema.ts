import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const TourneyPlayersUpdateWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateWithoutTeamInput> = z.object({
  player: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TourneyPlayersUpdateWithoutTeamInputSchema;
