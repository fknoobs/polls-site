import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyPlayersCreateManyTeamInputSchema } from './TourneyPlayersCreateManyTeamInputSchema';

export const TourneyPlayersCreateManyTeamInputEnvelopeSchema: z.ZodType<Prisma.TourneyPlayersCreateManyTeamInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TourneyPlayersCreateManyTeamInputSchema),z.lazy(() => TourneyPlayersCreateManyTeamInputSchema).array() ]),
}).strict();

export default TourneyPlayersCreateManyTeamInputEnvelopeSchema;
