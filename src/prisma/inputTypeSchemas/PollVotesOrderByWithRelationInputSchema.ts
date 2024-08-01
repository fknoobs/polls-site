import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PollsOrderByWithRelationInputSchema } from './PollsOrderByWithRelationInputSchema';
import { PollOptionsOrderByWithRelationInputSchema } from './PollOptionsOrderByWithRelationInputSchema';

export const PollVotesOrderByWithRelationInputSchema: z.ZodType<Prisma.PollVotesOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  fingerprint: z.lazy(() => SortOrderSchema).optional(),
  pollId: z.lazy(() => SortOrderSchema).optional(),
  optionId: z.lazy(() => SortOrderSchema).optional(),
  poll: z.lazy(() => PollsOrderByWithRelationInputSchema).optional(),
  option: z.lazy(() => PollOptionsOrderByWithRelationInputSchema).optional()
}).strict();

export default PollVotesOrderByWithRelationInputSchema;
