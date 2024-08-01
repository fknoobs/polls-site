import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsQueueUncheckedCreateInputSchema: z.ZodType<Prisma.TtsQueueUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  ttsFileId: z.number().int()
}).strict();

export default TtsQueueUncheckedCreateInputSchema;
