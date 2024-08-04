import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UserRelationFilterSchema } from './UserRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SteamProfileWhereUniqueInputSchema: z.ZodType<Prisma.SteamProfileWhereUniqueInput> = z.union([
  z.object({
    id: z.string().cuid(),
    userId: z.string(),
    steamId: z.string()
  }),
  z.object({
    id: z.string().cuid(),
    userId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
    steamId: z.string(),
  }),
  z.object({
    id: z.string().cuid(),
  }),
  z.object({
    userId: z.string(),
    steamId: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
  z.object({
    steamId: z.string(),
  }),
])
.and(z.object({
  id: z.string().cuid().optional(),
  userId: z.string().optional(),
  steamId: z.string().optional(),
  AND: z.union([ z.lazy(() => SteamProfileWhereInputSchema),z.lazy(() => SteamProfileWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamProfileWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamProfileWhereInputSchema),z.lazy(() => SteamProfileWhereInputSchema).array() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UserRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional(),
}).strict());

export default SteamProfileWhereUniqueInputSchema;
