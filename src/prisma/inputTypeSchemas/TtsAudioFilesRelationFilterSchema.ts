import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';

export const TtsAudioFilesRelationFilterSchema: z.ZodType<Prisma.TtsAudioFilesRelationFilter> = z.object({
  is: z.lazy(() => TtsAudioFilesWhereInputSchema).optional(),
  isNot: z.lazy(() => TtsAudioFilesWhereInputSchema).optional()
}).strict();

export default TtsAudioFilesRelationFilterSchema;
