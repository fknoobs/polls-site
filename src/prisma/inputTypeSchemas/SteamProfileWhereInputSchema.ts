import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserScalarRelationFilterSchema } from './UserScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SteamProfileWhereInputSchema: z.ZodType<Prisma.SteamProfileWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SteamProfileWhereInputSchema),z.lazy(() => SteamProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamProfileWhereInputSchema),z.lazy(() => SteamProfileWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  steamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict();

export default SteamProfileWhereInputSchema;
