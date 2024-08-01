import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const PollOptionsScalarWhereInputSchema: z.ZodType<Prisma.PollOptionsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PollOptionsScalarWhereInputSchema),z.lazy(() => PollOptionsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PollOptionsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PollOptionsScalarWhereInputSchema),z.lazy(() => PollOptionsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  pollId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PollOptionsScalarWhereInputSchema;
