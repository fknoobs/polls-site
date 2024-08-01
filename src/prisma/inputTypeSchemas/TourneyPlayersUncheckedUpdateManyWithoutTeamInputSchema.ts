import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const TourneyPlayersUncheckedUpdateManyWithoutTeamInputSchema: z.ZodType<Prisma.TourneyPlayersUncheckedUpdateManyWithoutTeamInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  player: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TourneyPlayersUncheckedUpdateManyWithoutTeamInputSchema;
