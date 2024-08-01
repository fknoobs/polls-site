import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesSelectSchema } from '../inputTypeSchemas/TtsAudioFilesSelectSchema';
import { TtsAudioFilesIncludeSchema } from '../inputTypeSchemas/TtsAudioFilesIncludeSchema';

export const TtsAudioFilesArgsSchema: z.ZodType<Prisma.TtsAudioFilesDefaultArgs> = z.object({
  select: z.lazy(() => TtsAudioFilesSelectSchema).optional(),
  include: z.lazy(() => TtsAudioFilesIncludeSchema).optional(),
}).strict();

export default TtsAudioFilesArgsSchema;
