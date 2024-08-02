import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsCreateManyInputSchema } from '../inputTypeSchemas/PollsCreateManyInputSchema'

export const PollsCreateManyArgsSchema: z.ZodType<Prisma.PollsCreateManyArgs> = z.object({
  data: z.union([ PollsCreateManyInputSchema,PollsCreateManyInputSchema.array() ]),
}).strict() ;

export default PollsCreateManyArgsSchema;
