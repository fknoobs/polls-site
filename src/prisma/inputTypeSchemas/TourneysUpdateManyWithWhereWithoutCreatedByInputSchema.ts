import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysScalarWhereInputSchema } from './TourneysScalarWhereInputSchema';
import { TourneysUpdateManyMutationInputSchema } from './TourneysUpdateManyMutationInputSchema';
import { TourneysUncheckedUpdateManyWithoutCreatedByInputSchema } from './TourneysUncheckedUpdateManyWithoutCreatedByInputSchema';

export const TourneysUpdateManyWithWhereWithoutCreatedByInputSchema: z.ZodType<Prisma.TourneysUpdateManyWithWhereWithoutCreatedByInput> = z.object({
  where: z.lazy(() => TourneysScalarWhereInputSchema),
  data: z.union([ z.lazy(() => TourneysUpdateManyMutationInputSchema),z.lazy(() => TourneysUncheckedUpdateManyWithoutCreatedByInputSchema) ]),
}).strict();

export default TourneysUpdateManyWithWhereWithoutCreatedByInputSchema;
