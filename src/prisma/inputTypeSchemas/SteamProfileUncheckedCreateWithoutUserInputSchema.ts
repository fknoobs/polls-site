import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SteamProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  steamId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default SteamProfileUncheckedCreateWithoutUserInputSchema;
