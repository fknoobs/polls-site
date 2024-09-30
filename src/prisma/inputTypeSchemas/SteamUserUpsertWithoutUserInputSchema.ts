import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamUserUpdateWithoutUserInputSchema } from './SteamUserUpdateWithoutUserInputSchema';
import { SteamUserUncheckedUpdateWithoutUserInputSchema } from './SteamUserUncheckedUpdateWithoutUserInputSchema';
import { SteamUserCreateWithoutUserInputSchema } from './SteamUserCreateWithoutUserInputSchema';
import { SteamUserUncheckedCreateWithoutUserInputSchema } from './SteamUserUncheckedCreateWithoutUserInputSchema';
import { SteamUserWhereInputSchema } from './SteamUserWhereInputSchema';

export const SteamUserUpsertWithoutUserInputSchema: z.ZodType<Prisma.SteamUserUpsertWithoutUserInput> = z.object({
  update: z.union([ z.lazy(() => SteamUserUpdateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => SteamUserCreateWithoutUserInputSchema),z.lazy(() => SteamUserUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => SteamUserWhereInputSchema).optional()
}).strict();

export default SteamUserUpsertWithoutUserInputSchema;
