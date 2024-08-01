import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateNestedOneWithoutTeamsInputSchema } from './TourneysCreateNestedOneWithoutTeamsInputSchema';

export const TourneyTeamsCreateWithoutPlayersInputSchema: z.ZodType<Prisma.TourneyTeamsCreateWithoutPlayersInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  tourney: z.lazy(() => TourneysCreateNestedOneWithoutTeamsInputSchema)
}).strict();

export default TourneyTeamsCreateWithoutPlayersInputSchema;
