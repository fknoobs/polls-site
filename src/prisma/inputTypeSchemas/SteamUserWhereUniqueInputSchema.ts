import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';
import { UserNullableScalarRelationFilterSchema } from './UserNullableScalarRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SteamUserWhereUniqueInputSchema: z.ZodType<Prisma.SteamUserWhereUniqueInput> = z.union([
  z.object({
    steamId: z.string(),
    userId: z.string()
  }),
  z.object({
    steamId: z.string(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.object({
  steamId: z.string().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => SteamUserWhereInputSchema),z.lazy(() => SteamUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamUserWhereInputSchema),z.lazy(() => SteamUserWhereInputSchema).array() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableScalarRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict());

export default SteamUserWhereUniqueInputSchema;
