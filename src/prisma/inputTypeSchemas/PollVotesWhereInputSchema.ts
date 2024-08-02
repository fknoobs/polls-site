import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { PollsRelationFilterSchema } from './PollsRelationFilterSchema';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { PollOptionsRelationFilterSchema } from './PollOptionsRelationFilterSchema';
import { PollOptionsWhereInputSchema } from './PollOptionsWhereInputSchema';

export const PollVotesWhereInputSchema: z.ZodType<Prisma.PollVotesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PollVotesWhereInputSchema),z.lazy(() => PollVotesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollVotesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollVotesWhereInputSchema),z.lazy(() => PollVotesWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  fingerprint: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ipaddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  optionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  poll: z.union([ z.lazy(() => PollsRelationFilterSchema),z.lazy(() => PollsWhereInputSchema) ]).optional(),
  option: z.union([ z.lazy(() => PollOptionsRelationFilterSchema),z.lazy(() => PollOptionsWhereInputSchema) ]).optional(),
}).strict();

export default PollVotesWhereInputSchema;
