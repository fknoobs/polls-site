import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { TtsAudioFilesScalarRelationFilterSchema } from './TtsAudioFilesScalarRelationFilterSchema';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';

export const TtsQueueWhereInputSchema: z.ZodType<Prisma.TtsQueueWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TtsQueueWhereInputSchema),z.lazy(() => TtsQueueWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsQueueWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsQueueWhereInputSchema),z.lazy(() => TtsQueueWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ttsFileId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  ttsFile: z.union([ z.lazy(() => TtsAudioFilesScalarRelationFilterSchema),z.lazy(() => TtsAudioFilesWhereInputSchema) ]).optional(),
}).strict();

export default TtsQueueWhereInputSchema;
