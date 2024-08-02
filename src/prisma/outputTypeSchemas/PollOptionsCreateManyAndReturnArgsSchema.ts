import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsCreateManyInputSchema } from '../inputTypeSchemas/PollOptionsCreateManyInputSchema'

export const PollOptionsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PollOptionsCreateManyAndReturnArgs> = z.object({
  data: z.union([ PollOptionsCreateManyInputSchema,PollOptionsCreateManyInputSchema.array() ]),
}).strict() ;

export default PollOptionsCreateManyAndReturnArgsSchema;
