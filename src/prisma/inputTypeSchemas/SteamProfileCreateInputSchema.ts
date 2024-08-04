import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSteamInputSchema } from './UserCreateNestedOneWithoutSteamInputSchema';

export const SteamProfileCreateInputSchema: z.ZodType<Prisma.SteamProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  steamId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutSteamInputSchema)
}).strict();

export default SteamProfileCreateInputSchema;
