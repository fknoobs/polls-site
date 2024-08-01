import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema } from './TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema';

export const TourneyTeamsUpdateWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsUpdateWithoutPlayersInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  tourney: z.lazy(() => TourneysUpdateOneRequiredWithoutTeamsNestedInputSchema).optional()
}).strict();

export default TourneyTeamsUpdateWithoutPlayersInputSchema;
