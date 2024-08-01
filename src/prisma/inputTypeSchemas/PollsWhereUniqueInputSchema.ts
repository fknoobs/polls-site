import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PollsWhereInputSchema } from './PollsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PollOptionsListRelationFilterSchema } from './PollOptionsListRelationFilterSchema';
import { PollVotesListRelationFilterSchema } from './PollVotesListRelationFilterSchema';

export const PollsWhereUniqueInputSchema: z.ZodType<Prisma.PollsWhereUniqueInput> = z.union([
  z.object({
    id: z.number().int(),
    slug: z.string()
  }),
  z.object({
    id: z.number().int(),
  }),
  z.object({
    slug: z.string(),
  }),
])
.and(z.object({
  id: z.number().int().optional(),
  slug: z.string().optional(),
  AND: z.union([ z.lazy(() => PollsWhereInputSchema),z.lazy(() => PollsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollsWhereInputSchema),z.lazy(() => PollsWhereInputSchema).array() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  options: z.lazy(() => PollOptionsListRelationFilterSchema).optional(),
  votes: z.lazy(() => PollVotesListRelationFilterSchema).optional()
}).strict());

export default PollsWhereUniqueInputSchema;
