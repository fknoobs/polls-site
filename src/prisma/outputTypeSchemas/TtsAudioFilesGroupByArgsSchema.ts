import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'
import { TtsAudioFilesOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TtsAudioFilesOrderByWithAggregationInputSchema'
import { TtsAudioFilesScalarFieldEnumSchema } from '../inputTypeSchemas/TtsAudioFilesScalarFieldEnumSchema'
import { TtsAudioFilesScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TtsAudioFilesScalarWhereWithAggregatesInputSchema'

export const TtsAudioFilesGroupByArgsSchema: z.ZodType<Prisma.TtsAudioFilesGroupByArgs> = z.object({
  where: TtsAudioFilesWhereInputSchema.optional(),
  orderBy: z.union([ TtsAudioFilesOrderByWithAggregationInputSchema.array(),TtsAudioFilesOrderByWithAggregationInputSchema ]).optional(),
  by: TtsAudioFilesScalarFieldEnumSchema.array(),
  having: TtsAudioFilesScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TtsAudioFilesGroupByArgsSchema;
