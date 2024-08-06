import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema } from './TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema';

export const TourneyPlayersUpdateInputSchema: z.ZodType<Prisma.TourneyPlayersUpdateInput> = z.object({
  steamId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  profile: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  timezone: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  team: z.lazy(() => TourneyTeamsUpdateOneRequiredWithoutPlayersNestedInputSchema).optional()
}).strict();

export default TourneyPlayersUpdateInputSchema;
