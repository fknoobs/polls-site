import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesUpdateManyMutationInputSchema } from '../inputTypeSchemas/TtsAudioFilesUpdateManyMutationInputSchema'
import { TtsAudioFilesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TtsAudioFilesUncheckedUpdateManyInputSchema'
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'

export const TtsAudioFilesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TtsAudioFilesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TtsAudioFilesUpdateManyMutationInputSchema,TtsAudioFilesUncheckedUpdateManyInputSchema ]),
  where: TtsAudioFilesWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TtsAudioFilesUpdateManyAndReturnArgsSchema;
