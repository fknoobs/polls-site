import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PollsRelationFilterSchema } from './PollsRelationFilterSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollVotesListRelationFilterSchema } from './PollVotesListRelationFilterSchema';

export const PollOptionsWhereUniqueInputSchema: z.ZodType<Prisma.PollOptionsWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PollOptionsWhereInputSchema),z.lazy(() => PollOptionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollOptionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollOptionsWhereInputSchema),z.lazy(() => PollOptionsWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  poll: z.union([ z.lazy(() => PollsRelationFilterSchema),z.lazy(() => PollsWhereInputSchema) ]).optional(),
  votes: z.lazy(() => PollVotesListRelationFilterSchema).optional()
}).strict());

export default PollOptionsWhereUniqueInputSchema;
