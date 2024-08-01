import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const TourneyPlayersUpdateManyMutationInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateManyMutationInput> = z.object({
  player: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TourneyPlayersUpdateManyMutationInputSchema;
