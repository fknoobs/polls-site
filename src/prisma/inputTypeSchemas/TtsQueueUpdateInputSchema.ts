import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInputSchema } from './TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInputSchema';

export const TtsQueueUpdateInputSchema: z.ZodType<Prisma.TtsQueueUpdateInput> = z.object({
  ttsFile: z.lazy(() => TtsAudioFilesUpdateOneRequiredWithoutTtsQueueNestedInputSchema).optional()
}).strict();

export default TtsQueueUpdateInputSchema;
