import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TtsAudioFilesWhereInputSchema } from './TtsAudioFilesWhereInputSchema';

export const TtsAudioFilesScalarRelationFilterSchema: z.ZodType<Prisma.TtsAudioFilesScalarRelationFilter> = z.object({
  is: z.lazy(() => TtsAudioFilesWhereInputSchema).optional(),
  isNot: z.lazy(() => TtsAudioFilesWhereInputSchema).optional()
}).strict();

export default TtsAudioFilesScalarRelationFilterSchema;
