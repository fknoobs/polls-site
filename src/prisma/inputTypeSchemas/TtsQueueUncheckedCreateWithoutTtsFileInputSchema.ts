import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TtsQueueUncheckedCreateWithoutTtsFileInputSchema: z.ZodType<Prisma.TtsQueueUncheckedCreateWithoutTtsFileInput> = z.object({
  id: z.number().int().optional()
}).strict();

export default TtsQueueUncheckedCreateWithoutTtsFileInputSchema;
