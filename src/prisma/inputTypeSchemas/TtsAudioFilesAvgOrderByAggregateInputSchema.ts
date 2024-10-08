import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsAudioFilesAvgOrderByAggregateInputSchema: z.ZodType<Prisma.TtsAudioFilesAvgOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsAudioFilesAvgOrderByAggregateInputSchema;
