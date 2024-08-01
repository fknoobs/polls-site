import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereInputSchema } from './PollVotesWhereInputSchema';

export const PollVotesListRelationFilterSchema: z.ZodType<Prisma.PollVotesListRelationFilter> = z.object({
  every: z.lazy(() => PollVotesWhereInputSchema).optional(),
  some: z.lazy(() => PollVotesWhereInputSchema).optional(),
  none: z.lazy(() => PollVotesWhereInputSchema).optional()
}).strict();

export default PollVotesListRelationFilterSchema;
