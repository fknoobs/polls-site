import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileWhereInputSchema } from './SteamProfileWhereInputSchema';

export const SteamProfileNullableScalarRelationFilterSchema: z.ZodType<Prisma.SteamProfileNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => SteamProfileWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => SteamProfileWhereInputSchema).optional().nullable()
}).strict();

export default SteamProfileNullableScalarRelationFilterSchema;
