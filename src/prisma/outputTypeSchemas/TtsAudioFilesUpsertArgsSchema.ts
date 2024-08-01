import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesIncludeSchema } from '../inputTypeSchemas/TtsAudioFilesIncludeSchema'
import { TtsAudioFilesWhereUniqueInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereUniqueInputSchema'
import { TtsAudioFilesCreateInputSchema } from '../inputTypeSchemas/TtsAudioFilesCreateInputSchema'
import { TtsAudioFilesUncheckedCreateInputSchema } from '../inputTypeSchemas/TtsAudioFilesUncheckedCreateInputSchema'
import { TtsAudioFilesUpdateInputSchema } from '../inputTypeSchemas/TtsAudioFilesUpdateInputSchema'
import { TtsAudioFilesUncheckedUpdateInputSchema } from '../inputTypeSchemas/TtsAudioFilesUncheckedUpdateInputSchema'
import { TtsQueueFindManyArgsSchema } from "../outputTypeSchemas/TtsQueueFindManyArgsSchema"
import { TtsAudioFilesCountOutputTypeArgsSchema } from "../outputTypeSchemas/TtsAudioFilesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TtsAudioFilesSelectSchema: z.ZodType<Prisma.TtsAudioFilesSelect> = z.object({
  id: z.boolean().optional(),
  rewardName: z.boolean().optional(),
  userName: z.boolean().optional(),
  input: z.boolean().optional(),
  filePath: z.boolean().optional(),
  TtsQueue: z.union([z.boolean(),z.lazy(() => TtsQueueFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TtsAudioFilesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TtsAudioFilesUpsertArgsSchema: z.ZodType<Prisma.TtsAudioFilesUpsertArgs> = z.object({
  select: TtsAudioFilesSelectSchema.optional(),
  include: TtsAudioFilesIncludeSchema.optional(),
  where: TtsAudioFilesWhereUniqueInputSchema,
  create: z.union([ TtsAudioFilesCreateInputSchema,TtsAudioFilesUncheckedCreateInputSchema ]),
  update: z.union([ TtsAudioFilesUpdateInputSchema,TtsAudioFilesUncheckedUpdateInputSchema ]),
}).strict() ;

export default TtsAudioFilesUpsertArgsSchema;
