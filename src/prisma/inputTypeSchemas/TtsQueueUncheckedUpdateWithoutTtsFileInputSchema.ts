import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const TtsQueueUncheckedUpdateWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueUncheckedUpdateWithoutTtsFileInput> = z.object({
  id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default TtsQueueUncheckedUpdateWithoutTtsFileInputSchema;
