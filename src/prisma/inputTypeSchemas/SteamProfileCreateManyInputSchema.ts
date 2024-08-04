import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamProfileCreateManyInputSchema: z.ZodType<Prisma.SteamProfileCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  steamId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SteamProfileCreateManyInputSchema;
