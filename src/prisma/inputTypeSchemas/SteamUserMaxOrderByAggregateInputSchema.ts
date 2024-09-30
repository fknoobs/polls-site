import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SteamUserMaxOrderByAggregateInputSchema: z.ZodType<Prisma.SteamUserMaxOrderByAggregateInput> = z.object({
  steamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SteamUserMaxOrderByAggregateInputSchema;
