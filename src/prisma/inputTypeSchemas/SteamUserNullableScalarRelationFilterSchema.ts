import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';

export const SteamUserNullableScalarRelationFilterSchema: z.ZodType<Prisma.SteamUserNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SteamUserWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SteamUserWhereInputSchema).optional().nullable()
}).strict();

export default SteamUserNullableScalarRelationFilterSchema;
