import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { PollsRelationFilterSchema } from './PollsRelationFilterSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollVotesListRelationFilterSchema } from './PollVotesListRelationFilterSchema';

export const PollOptionsWhereInputSchema: z.ZodType<Prisma.PollOptionsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PollOptionsWhereInputSchema),z.lazy(() => PollOptionsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollOptionsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollOptionsWhereInputSchema),z.lazy(() => PollOptionsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  poll: z.union([ z.lazy(() => PollsRelationFilterSchema),z.lazy(() => PollsWhereInputSchema) ]).optional(),
  votes: z.lazy(() => PollVotesListRelationFilterSchema).optional()
}).strict();

export default PollOptionsWhereInputSchema;
