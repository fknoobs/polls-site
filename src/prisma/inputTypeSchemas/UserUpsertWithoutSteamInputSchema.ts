import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutSteamInputSchema } from './UserUpdateWithoutSteamInputSchema';
import { UserUncheckedUpdateWithoutSteamInputSchema } from './UserUncheckedUpdateWithoutSteamInputSchema';
import { UserCreateWithoutSteamInputSchema } from './UserCreateWithoutSteamInputSchema';
import { UserUncheckedCreateWithoutSteamInputSchema } from './UserUncheckedCreateWithoutSteamInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutSteamInputSchema: z.ZodType<Prisma.UserUpsertWithoutSteamInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutSteamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutSteamInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutSteamInputSchema;
