import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';

export const PollsRelationFilterSchema: z.ZodType<Prisma.PollsRelationFilter> = z.object({
  is: z.lazy(() => PollsWhereInputSchema).optional(),
  isNot: z.lazy(() => PollsWhereInputSchema).optional()
}).strict();

export default PollsRelationFilterSchema;
