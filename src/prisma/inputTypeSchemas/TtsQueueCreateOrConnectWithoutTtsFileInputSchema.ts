import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueWhereUniqueInputSchema } from './TtsQueueWhereUniqueInputSchema';
import { TtsQueueCreateWithoutTtsFileInputSchema } from './TtsQueueCreateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedCreateWithoutTtsFileInputSchema } from './TtsQueueUncheckedCreateWithoutTtsFileInputSchema';

export const TtsQueueCreateOrConnectWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueCreateOrConnectWithoutTtsFileInput> = z.object({
  where: z.lazy(() => TtsQueueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema) ]),
}).strict();

export default TtsQueueCreateOrConnectWithoutTtsFileInputSchema;
