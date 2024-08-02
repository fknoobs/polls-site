import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TtsQueueUpdateManyWithoutTtsFileNestedInputSchema } from './TtsQueueUpdateManyWithoutTtsFileNestedInputSchema';

export const TtsAudioFilesUpdateInputSchema: z.ZodType<Prisma.TtsAudioFilesUpdateInput> = z.object({
  rewardName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  TtsQueue: z.lazy(() => TtsQueueUpdateManyWithoutTtsFileNestedInputSchema).optional()
}).strict();

export default TtsAudioFilesUpdateInputSchema;
