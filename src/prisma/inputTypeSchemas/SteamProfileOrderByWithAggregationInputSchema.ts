import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SteamProfileCountOrderByAggregateInputSchema } from './SteamProfileCountOrderByAggregateInputSchema';
import { SteamProfileMaxOrderByAggregateInputSchema } from './SteamProfileMaxOrderByAggregateInputSchema';
import { SteamProfileMinOrderByAggregateInputSchema } from './SteamProfileMinOrderByAggregateInputSchema';

export const SteamProfileOrderByWithAggregationInputSchema: z.ZodType<Prisma.SteamProfileOrderByWithAggregationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  steamId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => SteamProfileCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => SteamProfileMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => SteamProfileMinOrderByAggregateInputSchema).optional()
}).strict();

export default SteamProfileOrderByWithAggregationInputSchema;
