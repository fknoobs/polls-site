import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsAudioFilesMaxOrderByAggregateInputSchema: z.ZodType<Prisma.TtsAudioFilesMaxOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rewardName: z.lazy(() => SortOrderSchema).optional(),
  userName: z.lazy(() => SortOrderSchema).optional(),
  input: z.lazy(() => SortOrderSchema).optional(),
  filePath: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsAudioFilesMaxOrderByAggregateInputSchema;
