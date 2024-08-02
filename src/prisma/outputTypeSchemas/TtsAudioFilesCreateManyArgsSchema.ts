import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesCreateManyInputSchema } from '../inputTypeSchemas/TtsAudioFilesCreateManyInputSchema'

export const TtsAudioFilesCreateManyArgsSchema: z.ZodType<Prisma.TtsAudioFilesCreateManyArgs> = z.object({
  data: z.union([ TtsAudioFilesCreateManyInputSchema,TtsAudioFilesCreateManyInputSchema.array() ]),
}).strict() ;

export default TtsAudioFilesCreateManyArgsSchema;
