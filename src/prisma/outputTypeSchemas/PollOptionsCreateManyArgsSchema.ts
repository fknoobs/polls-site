import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsCreateManyInputSchema } from '../inputTypeSchemas/PollOptionsCreateManyInputSchema'

export const PollOptionsCreateManyArgsSchema: z.ZodType<Prisma.PollOptionsCreateManyArgs> = z.object({
  data: z.union([ PollOptionsCreateManyInputSchema,PollOptionsCreateManyInputSchema.array() ]),
}).strict() ;

export default PollOptionsCreateManyArgsSchema;
