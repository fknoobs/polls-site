import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesCreateManyInputSchema } from '../inputTypeSchemas/TtsAudioFilesCreateManyInputSchema'

export const TtsAudioFilesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TtsAudioFilesCreateManyAndReturnArgs> = z.object({
  data: z.union([ TtsAudioFilesCreateManyInputSchema,TtsAudioFilesCreateManyInputSchema.array() ]),
}).strict() ;

export default TtsAudioFilesCreateManyAndReturnArgsSchema;
