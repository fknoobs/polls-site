import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueCreateManyInputSchema } from '../inputTypeSchemas/TtsQueueCreateManyInputSchema'

export const TtsQueueCreateManyArgsSchema: z.ZodType<Prisma.TtsQueueCreateManyArgs> = z.object({
  data: z.union([ TtsQueueCreateManyInputSchema,TtsQueueCreateManyInputSchema.array() ]),
}).strict() ;

export default TtsQueueCreateManyArgsSchema;