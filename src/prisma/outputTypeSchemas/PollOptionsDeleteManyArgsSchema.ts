import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PollOptionsWhereInputSchema } from '../inputTypeSchemas/PollOptionsWhereInputSchema'

export const PollOptionsDeleteManyArgsSchema: z.ZodType<Prisma.PollOptionsDeleteManyArgs> = z.object({
  where: PollOptionsWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default PollOptionsDeleteManyArgsSchema;
