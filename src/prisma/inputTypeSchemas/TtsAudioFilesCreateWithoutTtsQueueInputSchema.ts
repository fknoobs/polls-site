import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsAudioFilesCreateWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesCreateWithoutTtsQueueInput> = z.object({
  rewardName: z.string(),
  userName: z.string(),
  input: z.string(),
  filePath: z.string()
}).strict();

export default TtsAudioFilesCreateWithoutTtsQueueInputSchema;
