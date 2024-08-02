import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { TtsAudioFilesOrderByWithRelationInputSchema } from './TtsAudioFilesOrderByWithRelationInputSchema';

export const TtsQueueOrderByWithRelationInputSchema: z.ZodType<Prisma.TtsQueueOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  ttsFileId: z.lazy(() => SortOrderSchema).optional(),
  ttsFile: z.lazy(() => TtsAudioFilesOrderByWithRelationInputSchema).optional()
}).strict();

export default TtsQueueOrderByWithRelationInputSchema;
