import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema';
import { TtsAudioFilesWhereUniqueInputSchema } from './TtsAudioFilesWhereUniqueInputSchema';

export const TtsAudioFilesCreateNestedOneWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesCreateNestedOneWithoutTtsQueueInput> = z.object({
  create: z.union([ z.lazy(() => TtsAudioFilesCreateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema).optional(),
  connect: z.lazy(() => TtsAudioFilesWhereUniqueInputSchema).optional()
}).strict();

export default TtsAudioFilesCreateNestedOneWithoutTtsQueueInputSchema;
