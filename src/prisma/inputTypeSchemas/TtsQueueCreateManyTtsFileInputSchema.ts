import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsQueueCreateManyTtsFileInputSchema: z.ZodType<Prisma.TtsQueueCreateManyTtsFileInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default TtsQueueCreateManyTtsFileInputSchema;
