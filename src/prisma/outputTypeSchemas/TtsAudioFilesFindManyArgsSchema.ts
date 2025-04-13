import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesIncludeSchema } from '../inputTypeSchemas/TtsAudioFilesIncludeSchema'
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'
import { TtsAudioFilesOrderByWithRelationInputSchema } from '../inputTypeSchemas/TtsAudioFilesOrderByWithRelationInputSchema'
import { TtsAudioFilesWhereUniqueInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereUniqueInputSchema'
import { TtsAudioFilesScalarFieldEnumSchema } from '../inputTypeSchemas/TtsAudioFilesScalarFieldEnumSchema'
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

export const TtsAudioFilesFindManyArgsSchema: z.ZodType<Prisma.TtsAudioFilesFindManyArgs> = z.object({
  select: TtsAudioFilesSelectSchema.optional(),
  include: z.lazy(() => TtsAudioFilesIncludeSchema).optional(),
  where: TtsAudioFilesWhereInputSchema.optional(),
  orderBy: z.union([ TtsAudioFilesOrderByWithRelationInputSchema.array(),TtsAudioFilesOrderByWithRelationInputSchema ]).optional(),
  cursor: TtsAudioFilesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TtsAudioFilesScalarFieldEnumSchema,TtsAudioFilesScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TtsAudioFilesFindManyArgsSchema;
