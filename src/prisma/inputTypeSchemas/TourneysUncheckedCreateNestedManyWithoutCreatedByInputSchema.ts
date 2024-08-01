import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateWithoutCreatedByInputSchema } from './TourneysCreateWithoutCreatedByInputSchema';
import { TourneysUncheckedCreateWithoutCreatedByInputSchema } from './TourneysUncheckedCreateWithoutCreatedByInputSchema';
import { TourneysCreateOrConnectWithoutCreatedByInputSchema } from './TourneysCreateOrConnectWithoutCreatedByInputSchema';
import { TourneysCreateManyCreatedByInputEnvelopeSchema } from './TourneysCreateManyCreatedByInputEnvelopeSchema';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';

export const TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema: z.ZodType<Prisma.TourneysUncheckedCreateNestedManyWithoutCreatedByInput> = z.object({
  create: z.union([ z.lazy(() => TourneysCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneysCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TourneysCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneysCreateManyCreatedByInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TourneysWhereUniqueInputSchema),z.lazy(() => TourneysWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema;
