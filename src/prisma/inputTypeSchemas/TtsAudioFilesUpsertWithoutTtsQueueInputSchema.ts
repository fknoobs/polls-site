import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUpdateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema';
import { TtsAudioFilesCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';

export const TtsAudioFilesUpsertWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesUpsertWithoutTtsQueueInput> = z.object({
  update: z.union([ z.lazy(() => TtsAudioFilesUpdateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema) ]),
  create: z.union([ z.lazy(() => TtsAudioFilesCreateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema) ]),
  where: z.lazy(() => TtsAudioFilesWhereInputSchema).optional()
}).strict();

export default TtsAudioFilesUpsertWithoutTtsQueueInputSchema;
