import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const TtsAudioFilesSumOrderByAggregateInputSchema: z.ZodType<Prisma.TtsAudioFilesSumOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default TtsAudioFilesSumOrderByAggregateInputSchema;
