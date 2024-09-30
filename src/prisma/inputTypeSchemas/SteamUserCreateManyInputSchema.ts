import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamUserCreateManyInputSchema: z.ZodType<Prisma.SteamUserCreateManyInput> = z.object({
  steamId: z.string(),
  userId: z.string()
}).strict();

export default SteamUserCreateManyInputSchema;
