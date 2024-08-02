import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsQueueWhereInputSchema } from './TtsQueueWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { TtsAudioFilesRelationFilterSchema } from './TtsAudioFilesRelationFilterSchema';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';

export const TtsQueueWhereUniqueInputSchema: z.ZodType<Prisma.TtsQueueWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TtsQueueWhereInputSchema),z.lazy(() => TtsQueueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsQueueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsQueueWhereInputSchema),z.lazy(() => TtsQueueWhereInputSchema).array() ]).optional(),
  ttsFileId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  ttsFile: z.union([ z.lazy(() => TtsAudioFilesRelationFilterSchema),z.lazy(() => TtsAudioFilesWhereInputSchema) ]).optional(),
}).strict());

export default TtsQueueWhereUniqueInputSchema;
