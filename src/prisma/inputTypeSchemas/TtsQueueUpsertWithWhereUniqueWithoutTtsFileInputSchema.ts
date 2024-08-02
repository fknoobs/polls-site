import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueWhereUniqueInputSchema } from './TtsQueueWhereUniqueInputSchema';
import { TtsQueueUpdateWithoutTtsFileInputSchema } from './TtsQueueUpdateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedUpdateWithoutTtsFileInputSchema } from './TtsQueueUncheckedUpdateWithoutTtsFileInputSchema';
import { TtsQueueCreateWithoutTtsFileInputSchema } from './TtsQueueCreateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedCreateWithoutTtsFileInputSchema } from './TtsQueueUncheckedCreateWithoutTtsFileInputSchema';

export const TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueUpsertWithWhereUniqueWithoutTtsFileInput> = z.object({
  where: z.lazy(() => TtsQueueWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => TtsQueueUpdateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedUpdateWithoutTtsFileInputSchema) ]),
  create: z.union([ z.lazy(() => TtsQueueCreateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedCreateWithoutTtsFileInputSchema) ]),
}).strict();

export default TtsQueueUpsertWithWhereUniqueWithoutTtsFileInputSchema;
