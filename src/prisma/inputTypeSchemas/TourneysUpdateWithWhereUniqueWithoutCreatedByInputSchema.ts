import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysUpdateWithoutCreatedByInputSchema } from './TourneysUpdateWithoutCreatedByInputSchema';
import { TourneysUncheckedUpdateWithoutCreatedByInputSchema } from './TourneysUncheckedUpdateWithoutCreatedByInputSchema';

export const TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TourneysUpdateWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TourneysWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TourneysUpdateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedUpdateWithoutCreatedByInputSchema) ]),
}).strict();

export default TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema;
