import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueFindManyArgsSchema } from "../outputTypeSchemas/TtsQueueFindManyArgsSchema"
import { TtsAudioFilesCountOutputTypeArgsSchema } from "../outputTypeSchemas/TtsAudioFilesCountOutputTypeArgsSchema"

export const TtsAudioFilesIncludeSchema: z.ZodType<Prisma.TtsAudioFilesInclude> = z.object({
  TtsQueue: z.union([z.boolean(),z.lazy(() => TtsQueueFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TtsAudioFilesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TtsAudioFilesIncludeSchema;
