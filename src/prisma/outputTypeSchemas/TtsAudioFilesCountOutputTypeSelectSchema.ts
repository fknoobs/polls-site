import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const TtsAudioFilesCountOutputTypeSelectSchema: z.ZodType<Prisma.TtsAudioFilesCountOutputTypeSelect> = z.object({
  TtsQueue: z.boolean().optional(),
}).strict();

export default TtsAudioFilesCountOutputTypeSelectSchema;
