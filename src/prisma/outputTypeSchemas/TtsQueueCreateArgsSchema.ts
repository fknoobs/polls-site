import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueIncludeSchema } from '../inputTypeSchemas/TtsQueueIncludeSchema'
import { TtsQueueCreateInputSchema } from '../inputTypeSchemas/TtsQueueCreateInputSchema'
import { TtsQueueUncheckedCreateInputSchema } from '../inputTypeSchemas/TtsQueueUncheckedCreateInputSchema'
import { TtsAudioFilesArgsSchema } from "../outputTypeSchemas/TtsAudioFilesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TtsQueueSelectSchema: z.ZodType<Prisma.TtsQueueSelect> = z.object({
  id: z.boolean().optional(),
  ttsFileId: z.boolean().optional(),
  ttsFile: z.union([z.boolean(),z.lazy(() => TtsAudioFilesArgsSchema)]).optional(),
}).strict()

export const TtsQueueCreateArgsSchema: z.ZodType<Prisma.TtsQueueCreateArgs> = z.object({
  select: TtsQueueSelectSchema.optional(),
  include: z.lazy(() => TtsQueueIncludeSchema).optional(),
  data: z.union([ TtsQueueCreateInputSchema,TtsQueueUncheckedCreateInputSchema ]),
}).strict() ;

export default TtsQueueCreateArgsSchema;
