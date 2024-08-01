import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueCreateNestedManyWithoutTtsFileInputSchema } from './TtsQueueCreateNestedManyWithoutTtsFileInputSchema';

export const TtsAudioFilesCreateInputSchema: z.ZodType<Prisma.TtsAudioFilesCreateInput> = z.object({
  rewardName: z.string(),
  userName: z.string(),
  input: z.string(),
  filePath: z.string(),
  TtsQueue: z.lazy(() => TtsQueueCreateNestedManyWithoutTtsFileInputSchema).optional()
}).strict();

export default TtsAudioFilesCreateInputSchema;
