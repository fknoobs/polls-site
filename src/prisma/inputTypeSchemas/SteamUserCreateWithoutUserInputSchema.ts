import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamUserCreateWithoutUserInputSchema: z.ZodType<Prisma.SteamUserCreateWithoutUserInput> = z.object({
  steamId: z.string()
}).strict();

export default SteamUserCreateWithoutUserInputSchema;
