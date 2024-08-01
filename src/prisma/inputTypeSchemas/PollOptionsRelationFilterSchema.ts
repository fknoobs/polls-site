import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollOptionsRelationFilterSchema: z.ZodType<Prisma.PollOptionsRelationFilter> = z.object({
  is: z.lazy(() => PollOptionsWhereInputSchema).optional(),
  isNot: z.lazy(() => PollOptionsWhereInputSchema).optional()
}).strict();

export default PollOptionsRelationFilterSchema;
