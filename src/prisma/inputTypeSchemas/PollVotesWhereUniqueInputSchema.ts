import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollVotesWhereInputSchema } from './PollVotesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PollsScalarRelationFilterSchema } from './PollsScalarRelationFilterSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollOptionsScalarRelationFilterSchema } from './PollOptionsScalarRelationFilterSchema';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollVotesWhereUniqueInputSchema: z.ZodType<Prisma.PollVotesWhereUniqueInput> = z.object({
  id: z.number().int()
})
.and(z.object({
  id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => PollVotesWhereInputSchema),z.lazy(() => PollVotesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollVotesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollVotesWhereInputSchema),z.lazy(() => PollVotesWhereInputSchema).array() ]).optional(),
  fingerprint: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ipaddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  optionId: z.union([ z.lazy(() => IntFilterSchema),z.number().int() ]).optional(),
  poll: z.union([ z.lazy(() => PollsScalarRelationFilterSchema),z.lazy(() => PollsWhereInputSchema) ]).optional(),
  option: z.union([ z.lazy(() => PollOptionsScalarRelationFilterSchema),z.lazy(() => PollOptionsWhereInputSchema) ]).optional(),
}).strict());

export default PollVotesWhereUniqueInputSchema;
