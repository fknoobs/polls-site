import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema: z.ZodType<Prisma.TtsAudioFilesUncheckedCreateWithoutTtsQueueInput> = z.object({
  id: z.number().int().optional(),
  rewardName: z.string(),
  userName: z.string(),
  input: z.string(),
  filePath: z.string()
}).strict();

export default TtsAudioFilesUncheckedCreateWithoutTtsQueueInputSchema;
