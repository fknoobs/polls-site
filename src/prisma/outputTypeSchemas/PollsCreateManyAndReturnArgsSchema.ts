import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsCreateManyInputSchema } from '../inputTypeSchemas/PollsCreateManyInputSchema'

export const PollsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.PollsCreateManyAndReturnArgs> = z.object({
  data: z.union([ PollsCreateManyInputSchema,PollsCreateManyInputSchema.array() ]),
}).strict() ;

export default PollsCreateManyAndReturnArgsSchema;
