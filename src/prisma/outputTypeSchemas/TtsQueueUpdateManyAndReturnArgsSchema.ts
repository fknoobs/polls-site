import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueUpdateManyMutationInputSchema } from '../inputTypeSchemas/TtsQueueUpdateManyMutationInputSchema'
import { TtsQueueUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TtsQueueUncheckedUpdateManyInputSchema'
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'

export const TtsQueueUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.TtsQueueUpdateManyAndReturnArgs> = z.object({
  data: z.union([ TtsQueueUpdateManyMutationInputSchema,TtsQueueUncheckedUpdateManyInputSchema ]),
  where: TtsQueueWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default TtsQueueUpdateManyAndReturnArgsSchema;
