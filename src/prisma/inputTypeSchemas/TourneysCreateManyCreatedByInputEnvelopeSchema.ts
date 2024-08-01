import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateManyCreatedByInputSchema } from './TourneysCreateManyCreatedByInputSchema';

export const TourneysCreateManyCreatedByInputEnvelopeSchema: z.ZodType<Prisma.TourneysCreateManyCreatedByInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => TourneysCreateManyCreatedByInputSchema),z.lazy(() => TourneysCreateManyCreatedByInputSchema).array() ]),
}).strict();

export default TourneysCreateManyCreatedByInputEnvelopeSchema;
