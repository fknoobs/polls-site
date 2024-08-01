import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueIncludeSchema } from '../inputTypeSchemas/TtsQueueIncludeSchema'
import { TtsQueueUpdateInputSchema } from '../inputTypeSchemas/TtsQueueUpdateInputSchema'
import { TtsQueueUncheckedUpdateInputSchema } from '../inputTypeSchemas/TtsQueueUncheckedUpdateInputSchema'
import { TtsQueueWhereUniqueInputSchema } from '../inputTypeSchemas/TtsQueueWhereUniqueInputSchema'
import { TtsAudioFilesArgsSchema } from "../outputTypeSchemas/TtsAudioFilesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TtsQueueSelectSchema: z.ZodType<Prisma.TtsQueueSelect> = z.object({
  id: z.boolean().optional(),
  ttsFileId: z.boolean().optional(),
  ttsFile: z.union([z.boolean(),z.lazy(() => TtsAudioFilesArgsSchema)]).optional(),
}).strict()

export const TtsQueueUpdateArgsSchema: z.ZodType<Prisma.TtsQueueUpdateArgs> = z.object({
  select: TtsQueueSelectSchema.optional(),
  include: TtsQueueIncludeSchema.optional(),
  data: z.union([ TtsQueueUpdateInputSchema,TtsQueueUncheckedUpdateInputSchema ]),
  where: TtsQueueWhereUniqueInputSchema,
}).strict() ;

export default TtsQueueUpdateArgsSchema;
