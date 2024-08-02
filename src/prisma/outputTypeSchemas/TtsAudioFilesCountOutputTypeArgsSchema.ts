import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesCountOutputTypeSelectSchema } from './TtsAudioFilesCountOutputTypeSelectSchema';

export const TtsAudioFilesCountOutputTypeArgsSchema: z.ZodType<Prisma.TtsAudioFilesCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => TtsAudioFilesCountOutputTypeSelectSchema).nullish(),
}).strict();

export default TtsAudioFilesCountOutputTypeSelectSchema;
