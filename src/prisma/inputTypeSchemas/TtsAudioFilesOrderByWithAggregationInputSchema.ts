import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TtsAudioFilesCountOrderByAggregateInputSchema } from './TtsAudioFilesCountOrderByAggregateInputSchema';
import { TtsAudioFilesAvgOrderByAggregateInputSchema } from './TtsAudioFilesAvgOrderByAggregateInputSchema';
import { TtsAudioFilesMaxOrderByAggregateInputSchema } from './TtsAudioFilesMaxOrderByAggregateInputSchema';
import { TtsAudioFilesMinOrderByAggregateInputSchema } from './TtsAudioFilesMinOrderByAggregateInputSchema';
import { TtsAudioFilesSumOrderByAggregateInputSchema } from './TtsAudioFilesSumOrderByAggregateInputSchema';

export const TtsAudioFilesOrderByWithAggregationInputSchema: z.ZodType<Prisma.TtsAudioFilesOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rewardName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  filePath: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => TtsAudioFilesCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => TtsAudioFilesAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => TtsAudioFilesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => TtsAudioFilesMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => TtsAudioFilesSumOrderByAggregateInputSchema).optional()
}).strict();

export default TtsAudioFilesOrderByWithAggregationInputSchema;
