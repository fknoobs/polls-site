import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueFindManyArgsSchema } from "../outputTypeSchemas/TtsQueueFindManyArgsSchema"
import { TtsAudioFilesCountOutputTypeArgsSchema } from "../outputTypeSchemas/TtsAudioFilesCountOutputTypeArgsSchema"

export const TtsAudioFilesSelectSchema: z.ZodType<Prisma.TtsAudioFilesSelect> = z.object({
  id: z.boolean().optional(),
  rewardName: z.boolean().optional(),
  userName: z.boolean().optional(),
  input: z.boolean().optional(),
  filePath: z.boolean().optional(),
  TtsQueue: z.union([z.boolean(),z.lazy(() => TtsQueueFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TtsAudioFilesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TtsAudioFilesSelectSchema;
