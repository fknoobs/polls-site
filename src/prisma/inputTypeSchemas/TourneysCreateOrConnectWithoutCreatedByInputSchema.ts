import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysCreateWithoutCreatedByInputSchema } from './TourneysCreateWithoutCreatedByInputSchema';
import { TourneysUncheckedCreateWithoutCreatedByInputSchema } from './TourneysUncheckedCreateWithoutCreatedByInputSchema';

export const TourneysCreateOrConnectWithoutCreatedByInputSchema: z.ZodType<Prisma.TourneysCreateOrConnectWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TourneysWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourneysCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TourneysCreateOrConnectWithoutCreatedByInputSchema;
