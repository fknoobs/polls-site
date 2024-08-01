import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const TourneyPlayersScalarWhereInputSchema: z.ZodType<Prisma.TourneyPlayersScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TourneyPlayersScalarWhereInputSchema),z.lazy(() => TourneyPlayersScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TourneyPlayersScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TourneyPlayersScalarWhereInputSchema),z.lazy(() => TourneyPlayersScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  player: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  teamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default TourneyPlayersScalarWhereInputSchema;
