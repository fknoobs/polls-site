import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';

export const SteamProfileNullableRelationFilterSchema: z.ZodType<Prisma.SteamProfileNullableRelationFilter> = z.object({
  is: z.lazy(() => SteamProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SteamProfileWhereInputSchema).optional().nullable()
}).strict();

export default SteamProfileNullableRelationFilterSchema;
