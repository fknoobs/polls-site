import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueIncludeSchema } from '../inputTypeSchemas/TtsQueueIncludeSchema'
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'
import { TtsQueueOrderByWithRelationInputSchema } from '../inputTypeSchemas/TtsQueueOrderByWithRelationInputSchema'
import { TtsQueueWhereUniqueInputSchema } from '../inputTypeSchemas/TtsQueueWhereUniqueInputSchema'
import { TtsQueueScalarFieldEnumSchema } from '../inputTypeSchemas/TtsQueueScalarFieldEnumSchema'
import { TtsAudioFilesArgsSchema } from "../outputTypeSchemas/TtsAudioFilesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TtsQueueSelectSchema: z.ZodType<Prisma.TtsQueueSelect> = z.object({
  id: z.boolean().optional(),
  ttsFileId: z.boolean().optional(),
  ttsFile: z.union([z.boolean(),z.lazy(() => TtsAudioFilesArgsSchema)]).optional(),
}).strict()

export const TtsQueueFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TtsQueueFindFirstOrThrowArgs> = z.object({
  select: TtsQueueSelectSchema.optional(),
  include: z.lazy(() => TtsQueueIncludeSchema).optional(),
  where: TtsQueueWhereInputSchema.optional(),
  orderBy: z.union([ TtsQueueOrderByWithRelationInputSchema.array(),TtsQueueOrderByWithRelationInputSchema ]).optional(),
  cursor: TtsQueueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TtsQueueScalarFieldEnumSchema,TtsQueueScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TtsQueueFindFirstOrThrowArgsSchema;
