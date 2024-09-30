import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSteamUserInputSchema } from './UserUpdateWithoutSteamUserInputSchema';
import { UserUncheckedUpdateWithoutSteamUserInputSchema } from './UserUncheckedUpdateWithoutSteamUserInputSchema';
import { UserCreateWithoutSteamUserInputSchema } from './UserCreateWithoutSteamUserInputSchema';
import { UserUncheckedCreateWithoutSteamUserInputSchema } from './UserUncheckedCreateWithoutSteamUserInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSteamUserInputSchema: z.ZodType<Prisma.UserUpsertWithoutSteamUserInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamUserInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamUserInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSteamUserInputSchema;
