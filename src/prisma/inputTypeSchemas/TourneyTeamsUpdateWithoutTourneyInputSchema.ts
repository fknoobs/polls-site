import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneyPlayersUpdateManyWithoutTeamNestedInputSchema } from './TourneyPlayersUpdateManyWithoutTeamNestedInputSchema';

export const TourneyTeamsUpdateWithoutTourneyInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateWithoutTourneyInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => TourneyPlayersUpdateManyWithoutTeamNestedInputSchema).optional()
}).strict();

export default TourneyTeamsUpdateWithoutTourneyInputSchema;
