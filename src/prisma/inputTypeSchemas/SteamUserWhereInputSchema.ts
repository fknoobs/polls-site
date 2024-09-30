import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { UserNullableRelationFilterSchema } from './UserNullableRelationFilterSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const SteamUserWhereInputSchema: z.ZodType<Prisma.SteamUserWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SteamUserWhereInputSchema),z.lazy(() => SteamUserWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SteamUserWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SteamUserWhereInputSchema),z.lazy(() => SteamUserWhereInputSchema).array() ]).optional(),
  steamId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  user: z.union([ z.lazy(() => UserNullableRelationFilterSchema),z.lazy(() => UserWhereInputSchema) ]).optional().nullable(),
}).strict();

export default SteamUserWhereInputSchema;
