import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueIncludeSchema } from '../inputTypeSchemas/TtsQueueIncludeSchema'
import { TtsQueueWhereUniqueInputSchema } from '../inputTypeSchemas/TtsQueueWhereUniqueInputSchema'
import { TtsAudioFilesArgsSchema } from "../outputTypeSchemas/TtsAudioFilesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TtsQueueSelectSchema: z.ZodType<Prisma.TtsQueueSelect> = z.object({
  id: z.boolean().optional(),
  ttsFileId: z.boolean().optional(),
  ttsFile: z.union([z.boolean(),z.lazy(() => TtsAudioFilesArgsSchema)]).optional(),
}).strict()

export const TtsQueueDeleteArgsSchema: z.ZodType<Prisma.TtsQueueDeleteArgs> = z.object({
  select: TtsQueueSelectSchema.optional(),
  include: TtsQueueIncludeSchema.optional(),
  where: TtsQueueWhereUniqueInputSchema,
}).strict() ;

export default TtsQueueDeleteArgsSchema;
