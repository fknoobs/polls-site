import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueCreateManyInputSchema } from '../inputTypeSchemas/TtsQueueCreateManyInputSchema'

export const TtsQueueCreateManyAndReturnArgsSchema: z.ZodType<Prisma.TtsQueueCreateManyAndReturnArgs> = z.object({
  data: z.union([ TtsQueueCreateManyInputSchema,TtsQueueCreateManyInputSchema.array() ]),
}).strict() ;

export default TtsQueueCreateManyAndReturnArgsSchema;
