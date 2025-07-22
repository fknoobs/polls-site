import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollOptionsScalarRelationFilterSchema: z.ZodType<Prisma.PollOptionsScalarRelationFilter> = z.object({
  is: z.lazy(() => PollOptionsWhereInputSchema).optional(),
  isNot: z.lazy(() => PollOptionsWhereInputSchema).optional()
}).strict();

export default PollOptionsScalarRelationFilterSchema;
