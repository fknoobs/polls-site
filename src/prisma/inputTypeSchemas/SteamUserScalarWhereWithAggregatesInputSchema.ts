import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const SteamUserScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SteamUserScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SteamUserScalarWhereWithAggregatesInputSchema),z.lazy(() => SteamUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamUserScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamUserScalarWhereWithAggregatesInputSchema),z.lazy(() => SteamUserScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  steamId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default SteamUserScalarWhereWithAggregatesInputSchema;
