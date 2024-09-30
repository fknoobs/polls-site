import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const SteamUserUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUncheckedCreateWithoutUserInput> = z.object({
  steamId: z.string()
}).strict();

export default SteamUserUncheckedCreateWithoutUserInputSchema;
