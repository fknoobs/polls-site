import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const SteamUserMinOrderByAggregateInputSchema: z.ZodType<Prisma.SteamUserMinOrderByAggregateInput> = z.object({
  steamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default SteamUserMinOrderByAggregateInputSchema;
