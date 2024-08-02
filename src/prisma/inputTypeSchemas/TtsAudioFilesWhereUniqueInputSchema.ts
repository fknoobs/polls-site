import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { TtsQueueListRelationFilterSchema } from './TtsQueueListRelationFilterSchema';

export const TtsAudioFilesWhereUniqueInputSchema: z.ZodType<Prisma.TtsAudioFilesWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => TtsAudioFilesWhereInputSchema),z.lazy(() => TtsAudioFilesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsAudioFilesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsAudioFilesWhereInputSchema),z.lazy(() => TtsAudioFilesWhereInputSchema).array() ]).optional(),
  rewardName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  input: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TtsQueue: z.lazy(() => TtsQueueListRelationFilterSchema).optional()
}).strict());

export default TtsAudioFilesWhereUniqueInputSchema;
