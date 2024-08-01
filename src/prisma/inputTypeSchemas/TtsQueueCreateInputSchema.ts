import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesCreateNestedOneWithoutTtsQueueInputSchema } from './TtsAudioFilesCreateNestedOneWithoutTtsQueueInputSchema';

export const TtsQueueCreateInputSchema: z.ZodType<Prisma.TtsQueueCreateInput> = z.object({
  ttsFile: z.lazy(() => TtsAudioFilesCreateNestedOneWithoutTtsQueueInputSchema)
}).strict();

export default TtsQueueCreateInputSchema;
