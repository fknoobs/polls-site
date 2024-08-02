import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueUncheckedCreateNestedManyWithoutTtsFileInputSchema } from './TtsQueueUncheckedCreateNestedManyWithoutTtsFileInputSchema';

export const TtsAudioFilesUncheckedCreateInputSchema: z.ZodType<Prisma.TtsAudioFilesUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  rewardName: z.string(),
  userName: z.string(),
  input: z.string(),
  filePath: z.string(),
  TtsQueue: z.lazy(() => TtsQueueUncheckedCreateNestedManyWithoutTtsFileInputSchema).optional()
}).strict();

export default TtsAudioFilesUncheckedCreateInputSchema;
