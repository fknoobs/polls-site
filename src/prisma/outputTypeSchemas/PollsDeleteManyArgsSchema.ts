import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollsWhereInputSchema } from '../inputTypeSchemas/PollsWhereInputSchema'

export const PollsDeleteManyArgsSchema: z.ZodType<Prisma.PollsDeleteManyArgs> = z.object({
  where: PollsWhereInputSchema.optional(),
}).strict() ;

export default PollsDeleteManyArgsSchema;
