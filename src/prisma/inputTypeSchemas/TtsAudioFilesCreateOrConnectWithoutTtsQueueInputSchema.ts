import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesWhereUniqueInputSchema } from './TtsAudioFilesWhereUniqueInputSchema';
import { TtsAudioFilesCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateWithoutTtsQueueInputSchema';
import { TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema } from './TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema';

export const TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesCreateOrConnectWithoutTtsQueueInput> = z.object({
  where: z.lazy(() => TtsAudioFilesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => TtsAudioFilesCreateWithoutTtsQueueInputSchema),z.lazy(() => TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema) ]),
}).strict();

export default TtsAudioFilesCreateOrConnectWithoutTtsQueueInputSchema;
