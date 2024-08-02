import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsQueueCreateManyInputSchema: z.ZodType<Prisma.TtsQueueCreateManyInput> = z.object({
  id: z.number().int().optional(),
  ttsFileId: z.number().int()
}).strict();

export default TtsQueueCreateManyInputSchema;
