import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';

export const PollsScalarRelationFilterSchema: z.ZodType<Prisma.PollsScalarRelationFilter> = z.object({
  is: z.lazy(() => PollsWhereInputSchema).optional(),
  isNot: z.lazy(() => PollsWhereInputSchema).optional()
}).strict();

export default PollsScalarRelationFilterSchema;
