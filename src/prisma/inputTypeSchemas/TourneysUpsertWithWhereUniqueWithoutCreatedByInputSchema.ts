import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysUpdateWithoutCreatedByInputSchema } from './TourneysUpdateWithoutCreatedByInputSchema';
import { TourneysUncheckedUpdateWithoutCreatedByInputSchema } from './TourneysUncheckedUpdateWithoutCreatedByInputSchema';
import { TourneysCreateWithoutCreatedByInputSchema } from './TourneysCreateWithoutCreatedByInputSchema';
import { TourneysUncheckedCreateWithoutCreatedByInputSchema } from './TourneysUncheckedCreateWithoutCreatedByInputSchema';

export const TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema: z.ZodType<Prisma.TourneysUpsertWithWhereUniqueWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TourneysWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TourneysUpdateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedUpdateWithoutCreatedByInputSchema) ]),
  create: z.union([ z.lazy(() => TourneysCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema) ]),
}).strict();

export default TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema;
