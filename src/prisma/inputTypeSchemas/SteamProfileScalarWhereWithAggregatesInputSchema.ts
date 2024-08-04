import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const SteamProfileScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.SteamProfileScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => SteamProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => SteamProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamProfileScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamProfileScalarWhereWithAggregatesInputSchema),z.lazy(() => SteamProfileScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  steamId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default SteamProfileScalarWhereWithAggregatesInputSchema;
