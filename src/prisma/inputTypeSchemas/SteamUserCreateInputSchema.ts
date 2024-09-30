import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutSteamUserInputSchema } from './UserCreateNestedOneWithoutSteamUserInputSchema';

export const SteamUserCreateInputSchema: z.ZodType<Prisma.SteamUserCreateInput> = z.object({
  steamId: z.string(),
  user: z.lazy(() => UserCreateNestedOneWithoutSteamUserInputSchema).optional()
}).strict();

export default SteamUserCreateInputSchema;
