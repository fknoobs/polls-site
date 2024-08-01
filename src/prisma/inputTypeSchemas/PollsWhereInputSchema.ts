import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PollOptionsListRelationFilterSchema } from './PollOptionsListRelationFilterSchema';
import { PollVotesListRelationFilterSchema } from './PollVotesListRelationFilterSchema';

export const PollsWhereInputSchema: z.ZodType<Prisma.PollsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PollsWhereInputSchema),z.lazy(() => PollsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollsWhereInputSchema),z.lazy(() => PollsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  slug: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  options: z.lazy(() => PollOptionsListRelationFilterSchema).optional(),
  votes: z.lazy(() => PollVotesListRelationFilterSchema).optional()
}).strict();

export default PollsWhereInputSchema;
