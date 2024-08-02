import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TourneysCreateWithoutCreatedByInputSchema } from './TourneysCreateWithoutCreatedByInputSchema';
import { TourneysUncheckedCreateWithoutCreatedByInputSchema } from './TourneysUncheckedCreateWithoutCreatedByInputSchema';
import { TourneysCreateOrConnectWithoutCreatedByInputSchema } from './TourneysCreateOrConnectWithoutCreatedByInputSchema';
import { TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema } from './TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema';
import { TourneysCreateManyCreatedByInputEnvelopeSchema } from './TourneysCreateManyCreatedByInputEnvelopeSchema';
import { TourneysWhereUniqueInputSchema } from './TourneysWhereUniqueInputSchema';
import { TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema } from './TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema';
import { TourneysUpdateManyWithWhereWithoutCreatedByInputSchema } from './TourneysUpdateManyWithWhereWithoutCreatedByInputSchema';
import { TourneysScalarWhereInputSchema } from './TourneysScalarWhereInputSchema';

export const TourneysUpdateManyWithoutCreatedByNestedInputSchema: z.ZodType<Prisma.TourneysUpdateManyWithoutCreatedByNestedInput> = z.object({
  create: z.union([ z.lazy(() => TourneysCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysCreateWithoutCreatedByInputSchema).array(),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema),z.lazy(() => TourneysUncheckedCreateWithoutCreatedByInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TourneysCreateOrConnectWithoutCreatedByInputSchema),z.lazy(() => TourneysCreateOrConnectWithoutCreatedByInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TourneysUpsertWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TourneysCreateManyCreatedByInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TourneysWhereUniqueInputSchema),z.lazy(() => TourneysWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TourneysWhereUniqueInputSchema),z.lazy(() => TourneysWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TourneysWhereUniqueInputSchema),z.lazy(() => TourneysWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TourneysWhereUniqueInputSchema),z.lazy(() => TourneysWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema),z.lazy(() => TourneysUpdateWithWhereUniqueWithoutCreatedByInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TourneysUpdateManyWithWhereWithoutCreatedByInputSchema),z.lazy(() => TourneysUpdateManyWithWhereWithoutCreatedByInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TourneysScalarWhereInputSchema),z.lazy(() => TourneysScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TourneysUpdateManyWithoutCreatedByNestedInputSchema;
