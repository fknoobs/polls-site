import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesArgsSchema } from "../outputTypeSchemas/TtsAudioFilesArgsSchema"

export const TtsQueueIncludeSchema: z.ZodType<Prisma.TtsQueueInclude> = z.object({
  ttsFile: z.union([z.boolean(),z.lazy(() => TtsAudioFilesArgsSchema)]).optional(),
}).strict()

export default TtsQueueIncludeSchema;
