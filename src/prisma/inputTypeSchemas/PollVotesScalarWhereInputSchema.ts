import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const PollVotesScalarWhereInputSchema: z.ZodType<Prisma.PollVotesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PollVotesScalarWhereInputSchema),z.lazy(() => PollVotesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollVotesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollVotesScalarWhereInputSchema),z.lazy(() => PollVotesScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  fingerprint: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  ipaddress: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  optionId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PollVotesScalarWhereInputSchema;
