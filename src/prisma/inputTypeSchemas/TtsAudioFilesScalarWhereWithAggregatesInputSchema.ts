import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const TtsAudioFilesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.TtsAudioFilesScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => TtsAudioFilesScalarWhereWithAggregatesInputSchema),z.lazy(() => TtsAudioFilesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => TtsAudioFilesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TtsAudioFilesScalarWhereWithAggregatesInputSchema),z.lazy(() => TtsAudioFilesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  rewardName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  input: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  filePath: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default TtsAudioFilesScalarWhereWithAggregatesInputSchema;
