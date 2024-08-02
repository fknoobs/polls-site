import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysUpdateWithoutTeamsInputSchema } from './TourneysUpdateWithoutTeamsInputSchema';
import { TourneysUncheckedUpdateWithoutTeamsInputSchema } from './TourneysUncheckedUpdateWithoutTeamsInputSchema';
import { TourneysCreateWithoutTeamsInputSchema } from './TourneysCreateWithoutTeamsInputSchema';
import { TourneysUncheckedCreateWithoutTeamsInputSchema } from './TourneysUncheckedCreateWithoutTeamsInputSchema';
import { TourneysWhereInputSchema } from './TourneysWhereInputSchema';

export const TourneysUpsertWithoutTeamsInputSchema: z.ZodType<Prisma.TourneysUpsertWithoutTeamsInput> = z.object({
  update: z.union([ z.lazy(() => TourneysUpdateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedUpdateWithoutTeamsInputSchema) ]),
  create: z.union([ z.lazy(() => TourneysCreateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutTeamsInputSchema) ]),
  where: z.lazy(() => TourneysWhereInputSchema).optional()
}).strict();

export default TourneysUpsertWithoutTeamsInputSchema;
