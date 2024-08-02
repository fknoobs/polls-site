import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema } from './TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema';

export const TourneyTeamsUncheckedUpdateInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tourneyId: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export default TourneyTeamsUncheckedUpdateInputSchema;
