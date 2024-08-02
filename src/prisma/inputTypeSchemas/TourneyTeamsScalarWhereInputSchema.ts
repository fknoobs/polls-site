import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';

export const TourneyTeamsScalarWhereInputSchema: z.ZodType<Prisma.TourneyTeamsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyTeamsScalarWhereInputSchema),z.lazy(() => TourneyTeamsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyTeamsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyTeamsScalarWhereInputSchema),z.lazy(() => TourneyTeamsScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  tourneyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default TourneyTeamsScalarWhereInputSchema;
