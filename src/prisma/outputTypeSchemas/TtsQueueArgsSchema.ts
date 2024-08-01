import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueSelectSchema } from '../inputTypeSchemas/TtsQueueSelectSchema';
import { TtsQueueIncludeSchema } from '../inputTypeSchemas/TtsQueueIncludeSchema';

export const TtsQueueArgsSchema: z.ZodType<Prisma.TtsQueueDefaultArgs> = z.object({
  select: z.lazy(() => TtsQueueSelectSchema).optional(),
  include: z.lazy(() => TtsQueueIncludeSchema).optional(),
}).strict();

export default TtsQueueArgsSchema;
