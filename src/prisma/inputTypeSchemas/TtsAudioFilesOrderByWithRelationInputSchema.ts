import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TtsQueueOrderByRelationAggregateInputSchema } from './TtsQueueOrderByRelationAggregateInputSchema';

export const TtsAudioFilesOrderByWithRelationInputSchema: z.ZodType<Prisma.TtsAudioFilesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rewardName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  filePath: z.lazy(() => SortOrderSchema).optional(),
  TtsQueue: z.lazy(() => TtsQueueOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TtsAudioFilesOrderByWithRelationInputSchema;
