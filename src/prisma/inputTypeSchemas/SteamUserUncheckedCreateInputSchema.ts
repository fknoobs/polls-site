import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamUserUncheckedCreateInputSchema: z.ZodType<Prisma.SteamUserUncheckedCreateInput> = z.object({
  steamId: z.string(),
  userId: z.string()
}).strict();

export default SteamUserUncheckedCreateInputSchema;
