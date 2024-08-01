import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';
import { TourneysUpdateWithoutTeamsInputSchema } from './TourneysUpdateWithoutTeamsInputSchema';
import { TourneysUncheckedUpdateWithoutTeamsInputSchema } from './TourneysUncheckedUpdateWithoutTeamsInputSchema';

export const TourneysUpdateToOneWithWhereWithoutTeamsInputSchema: z.ZodType<Prisma.TourneysUpdateToOneWithWhereWithoutTeamsInput> = z.object({
  where: z.lazy(() => TourneysWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TourneysUpdateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedUpdateWithoutTeamsInputSchema) ]),
}).strict();

export default TourneysUpdateToOneWithWhereWithoutTeamsInputSchema;
