import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueCreateWithoutTtsFileInputSchema } from './TtsQueueCreateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedCreateWithoutTtsFileInputSchema } from './TtsQueueUncheckedCreateWithoutTtsFileInputSchema';
import { TtsQueueCreateOrConnectWithoutTtsFileInputSchema } from './TtsQueueCreateOrConnectWithoutTtsFileInputSchema';
import { TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema } from './TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema';
import { TtsQueueCreateManyTtsFileInputEnvelopeSchema } from './TtsQueueCreateManyTtsFileInputEnvelopeSchema';
import { TtsQueueWhereUniqueInputSchema } from './TtsQueueWhereUniqueInputSchema';
import { TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema } from './TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema';
import { TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema } from './TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema';
import { TtsQueueScalarWhereInputSchema } from './TtsQueueScalarWhereInputSchema';

export const TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInputSchema: z.ZodType<Prisma.TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInput> = z.object({
  create: z.union([ z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema).array(),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TtsQueueCreateOrConnectWithoutTtsFileInputSchema),z.lazy(() => TtsQueueCreateOrConnectWithoutTtsFileInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TtsQueueCreateManyTtsFileInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => TtsQueueWhereUniqueInputSchema),z.lazy(() => TtsQueueWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => TtsQueueWhereUniqueInputSchema),z.lazy(() => TtsQueueWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => TtsQueueWhereUniqueInputSchema),z.lazy(() => TtsQueueWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => TtsQueueWhereUniqueInputSchema),z.lazy(() => TtsQueueWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUpdateManyWithWhereWithoutTtsFileInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => TtsQueueScalarWhereInputSchema),z.lazy(() => TtsQueueScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInputSchema;
