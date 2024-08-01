import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema } from './TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema';

export const TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUncheckedUpdateWithoutTourneyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => TourneyPlayersUncheckedUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export default TourneyTeamsUncheckedUpdateWithoutTourneyInputSchema;
