import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneyPlayersUpdateManyWithoutTeamNestedInputSchema } from './TourneyPlayersUpdateManyWithoutTeamNestedInputSchema';
import { TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema } from './TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema';

export const TourneyTeamsUpdateInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  players: z.lazy(() => TourneyPlayersUpdateManyWithoutTeamNestedInputSchema).optional(),
  tourney: z.lazy(() => TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema).optional()
}).strict();

export default TourneyTeamsUpdateInputSchema;
