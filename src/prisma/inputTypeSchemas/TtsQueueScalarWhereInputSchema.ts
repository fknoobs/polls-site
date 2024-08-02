import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const TtsQueueScalarWhereInputSchema: z.ZodType<Prisma.TtsQueueScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TtsQueueScalarWhereInputSchema),z.lazy(() => TtsQueueScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsQueueScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsQueueScalarWhereInputSchema),z.lazy(() => TtsQueueScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ttsFileId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default TtsQueueScalarWhereInputSchema;
