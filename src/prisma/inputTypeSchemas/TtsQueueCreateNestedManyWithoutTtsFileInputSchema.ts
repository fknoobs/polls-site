import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueCreateWithoutTtsFileInputSchema } from './TtsQueueCreateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedCreateWithoutTtsFileInputSchema } from './TtsQueueUncheckedCreateWithoutTtsFileInputSchema';
import { TtsQueueCreateOrConnectWithoutTtsFileInputSchema } from './TtsQueueCreateOrConnectWithoutTtsFileInputSchema';
import { TtsQueueCreateManyTtsFileInputEnvelopeSchema } from './TtsQueueCreateManyTtsFileInputEnvelopeSchema';
import { TtsQueueWhereUniqueInputSchema } from './TtsQueueWhereUniqueInputSchema';

export const TtsQueueCreateNestedManyWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueCreateNestedManyWithoutTtsFileInput> = z.object({
  create: z.union([ z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema).array(),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => TtsQueueCreateOrConnectWithoutTtsFileInputSchema),z.lazy(() => TtsQueueCreateOrConnectWithoutTtsFileInputSchema).array() ]).optional(),
  createMany: z.lazy(() => TtsQueueCreateManyTtsFileInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => TtsQueueWhereUniqueInputSchema),z.lazy(() => TtsQueueWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default TtsQueueCreateNestedManyWithoutTtsFileInputSchema;
