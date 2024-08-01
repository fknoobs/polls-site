import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'
import { TtsAudioFilesOrderByWithRelationInputSchema } from '../inputTypeSchemas/TtsAudioFilesOrderByWithRelationInputSchema'
import { TtsAudioFilesWhereUniqueInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereUniqueInputSchema'

export const TtsAudioFilesAggregateArgsSchema: z.ZodType<Prisma.TtsAudioFilesAggregateArgs> = z.object({
  where: TtsAudioFilesWhereInputSchema.optional(),
  orderBy: z.union([ TtsAudioFilesOrderByWithRelationInputSchema.array(),TtsAudioFilesOrderByWithRelationInputSchema ]).optional(),
  cursor: TtsAudioFilesWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TtsAudioFilesAggregateArgsSchema;
