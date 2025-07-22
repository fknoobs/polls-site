import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'

export const TtsAudioFilesDeleteManyArgsSchema: z.ZodType<Prisma.TtsAudioFilesDeleteManyArgs> = z.object({
  where: TtsAudioFilesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TtsAudioFilesDeleteManyArgsSchema;
