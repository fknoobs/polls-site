import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateWithoutTeamsInputSchema } from './TourneysCreateWithoutTeamsInputSchema';
import { TourneysUncheckedCreateWithoutTeamsInputSchema } from './TourneysUncheckedCreateWithoutTeamsInputSchema';
import { TourneysCreateOrConnectWithoutTeamsInputSchema } from './TourneysCreateOrConnectWithoutTeamsInputSchema';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';

export const TourneysCreateNestedOneWithoutTeamsInputSchema: z.ZodType<Prisma.TourneysCreateNestedOneWithoutTeamsInput> = z.object({
  create: z.union([ z.lazy(() => TourneysCreateWithoutTeamsInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutTeamsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TourneysCreateOrConnectWithoutTeamsInputSchema).optional(),
  connect: z.lazy(() => TourneysWhereUniqueInputSchema).optional()
}).strict();

export default TourneysCreateNestedOneWithoutTeamsInputSchema;
