import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';
import { TtsAudioFilesUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUpdateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema';

export const TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInput> = z.object({
  where: z.lazy(() => TtsAudioFilesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => TtsAudioFilesUpdateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema) ]),
}).strict();

export default TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInputSchema;
