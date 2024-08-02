import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TtsQueueUpdateManyMutationInputSchema } from '../inputTypeSchemas/TtsQueueUpdateManyMutationInputSchema'
import { TtsQueueUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TtsQueueUncheckedUpdateManyInputSchema'
import { TtsQueueWhereInputSchema } from '../inputTypeSchemas/TtsQueueWhereInputSchema'

export const TtsQueueUpdateManyArgsSchema: z.ZodType<Prisma.TtsQueueUpdateManyArgs> = z.object({
  data: z.union([ TtsQueueUpdateManyMutationInputSchema,TtsQueueUncheckedUpdateManyInputSchema ]),
  where: TtsQueueWhereInputSchema.optional(),
}).strict() ;

export default TtsQueueUpdateManyArgsSchema;
