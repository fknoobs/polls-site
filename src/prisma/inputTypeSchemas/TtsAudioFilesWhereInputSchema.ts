import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { TtsQueueListRelationFilterSchema } from './TtsQueueListRelationFilterSchema';

export const TtsAudioFilesWhereInputSchema: z.ZodType<Prisma.TtsAudioFilesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TtsAudioFilesWhereInputSchema),z.lazy(() => TtsAudioFilesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsAudioFilesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsAudioFilesWhereInputSchema),z.lazy(() => TtsAudioFilesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rewardName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  input: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  filePath: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  TtsQueue: z.lazy(() => TtsQueueListRelationFilterSchema).optional()
}).strict();

export default TtsAudioFilesWhereInputSchema;
