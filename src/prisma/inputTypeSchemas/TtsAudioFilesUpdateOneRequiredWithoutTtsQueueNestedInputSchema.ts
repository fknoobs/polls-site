import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema';
import { TtsAudioFilesUpsertWithoutTtsQueueInputSchema } from './TtsAudioFilesUpsertWithoutTtsQueueInputSchema';
import { TtsAudioFilesWhereUniqueInputSchema } from './TtsAudioFilesWhereUniqueInputSchema';
import { TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInputSchema } from './TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInputSchema';
import { TtsAudioFilesUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUpdateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema';

export const TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInputSchema: z.ZodType<Prisma.TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInput> = z.object({
  create: z.union([ z.lazy(() => TtsAudioFilesCreateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema).optional(),
  upsert: z.lazy(() => TtsAudioFilesUpsertWithoutTtsQueueInputSchema).optional(),
  connect: z.lazy(() => TtsAudioFilesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => TtsAudioFilesUpdateToOneWithWhereWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUpdateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedUpdateWithoutTtsQueueInputSchema) ]).optional(),
}).strict();

export default TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInputSchema;
