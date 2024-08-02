import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInputSchema } from './TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInputSchema';

export const TtsAudioFilesUncheckedUpdateInputSchema: z.ZodType<Prisma.TtsAudioFilesUncheckedUpdateInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rewardName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  userName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  input: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  filePath: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  TtsQueue: z.lazy(() => TtsQueueUncheckedUpdateManyWithoutTtsFileNestedInputSchema).optional()
}).strict();

export default TtsAudioFilesUncheckedUpdateInputSchema;
