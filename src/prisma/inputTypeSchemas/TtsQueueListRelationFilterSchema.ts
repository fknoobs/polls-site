import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueWhereInputSchema } from './TtsQueueWhereInputSchema';

export const TtsQueueListRelationFilterSchema: z.ZodType<Prisma.TtsQueueListRelationFilter> = z.object({
  every: z.lazy(() => TtsQueueWhereInputSchema).optional(),
  some: z.lazy(() => TtsQueueWhereInputSchema).optional(),
  none: z.lazy(() => TtsQueueWhereInputSchema).optional()
}).strict();

export default TtsQueueListRelationFilterSchema;
