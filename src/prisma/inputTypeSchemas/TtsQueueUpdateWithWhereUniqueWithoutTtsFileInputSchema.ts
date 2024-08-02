import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueWhereUniqueInputSchema } from './TtsQueueWhereUniqueInputSchema';
import { TtsQueueUpdateWithoutTtsFileInputSchema } from './TtsQueueUpdateWithoutTtsFileInputSchema';
import { TtsQueueUncheckedUpdateWithoutTtsFileInputSchema } from './TtsQueueUncheckedUpdateWithoutTtsFileInputSchema';

export const TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueUpdateWithWhereUniqueWithoutTtsFileInput> = z.object({
  where: z.lazy(() => TtsQueueWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => TtsQueueUpdateWithoutTtsFileInputSchema),z.lazy(() => TtsQueueUncheckedUpdateWithoutTtsFileInputSchema) ]),
}).strict();

export default TtsQueueUpdateWithWhereUniqueWithoutTtsFileInputSchema;
