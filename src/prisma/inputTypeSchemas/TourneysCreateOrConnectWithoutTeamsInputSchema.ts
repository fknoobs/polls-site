import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysCreateWithoutTeamsInputSchema } from './TourneysCreateWithoutTeamsInputSchema';
import { TourneysUncheckedCreateWithoutTeamsInputSchema } from './TourneysUncheckedCreateWithoutTeamsInputSchema';

export const TourneysCreateOrConnectWithoutTeamsInputSchema: z.ZodType<Prisma.TourneysCreateOrConnectWithoutTeamsInput> = z.object({
  where: z.lazy(() => TourneysWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TourneysCreateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutTeamsInputSchema) ]),
}).strict();

export default TourneysCreateOrConnectWithoutTeamsInputSchema;
