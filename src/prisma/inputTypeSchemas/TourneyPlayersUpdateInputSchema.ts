import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema } from './TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema';

export const TourneyPlayersUpdateInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateInput> = z.object({
  player: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema).optional()
}).strict();

export default TourneyPlayersUpdateInputSchema;
