import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsAudioFilesUpdateManyMutationInputSchema } from '../inputTypeSchemas/TtsAudioFilesUpdateManyMutationInputSchema'
import { TtsAudioFilesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TtsAudioFilesUncheckedUpdateManyInputSchema'
import { TtsAudioFilesWhereInputSchema } from '../inputTypeSchemas/TtsAudioFilesWhereInputSchema'

export const TtsAudioFilesUpdateManyArgsSchema: z.ZodType<Prisma.TtsAudioFilesUpdateManyArgs> = z.object({
  data: z.union([ TtsAudioFilesUpdateManyMutationInputSchema,TtsAudioFilesUncheckedUpdateManyInputSchema ]),
  where: TtsAudioFilesWhereInputSchema.optional(),
}).strict() ;

export default TtsAudioFilesUpdateManyArgsSchema;
