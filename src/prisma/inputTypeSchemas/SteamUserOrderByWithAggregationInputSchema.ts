import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SteamUserCountOrderByAggregateInputSchema } from './SteamUserCountOrderByAggregateInputSchema';
import { SteamUserMaxOrderByAggregateInputSchema } from './SteamUserMaxOrderByAggregateInputSchema';
import { SteamUserMinOrderByAggregateInputSchema } from './SteamUserMinOrderByAggregateInputSchema';

export const SteamUserOrderByWithAggregationInputSchema: z.ZodType<Prisma.SteamUserOrderByWithAggregationInput> = z.object({
  steamId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SteamUserCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SteamUserMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SteamUserMinOrderByAggregateInputSchema).optional()
}).strict();

export default SteamUserOrderByWithAggregationInputSchema;
