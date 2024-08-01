import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneyTeamsCreateManyTourneyInputSchema } from './TourneyTeamsCreateManyTourneyInputSchema';

export const TourneyTeamsCreateManyTourneyInputEnvelopeSchema: z.ZodType<Prisma.TourneyTeamsCreateManyTourneyInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TourneyTeamsCreateManyTourneyInputSchema),z.lazy(() => TourneyTeamsCreateManyTourneyInputSchema).array() ]),
}).strict();

export default TourneyTeamsCreateManyTourneyInputEnvelopeSchema;
