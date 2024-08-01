import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollOptionsListRelationFilterSchema: z.ZodType<Prisma.PollOptionsListRelationFilter> = z.object({
  every: z.lazy(() => PollOptionsWhereInputSchema).optional(),
  some: z.lazy(() => PollOptionsWhereInputSchema).optional(),
  none: z.lazy(() => PollOptionsWhereInputSchema).optional()
}).strict();

export default PollOptionsListRelationFilterSchema;
