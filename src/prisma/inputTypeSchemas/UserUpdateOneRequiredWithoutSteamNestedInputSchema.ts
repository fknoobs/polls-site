import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSteamInputSchema } from './UserCreateWithoutSteamInputSchema';
import { UserUncheckedCreateWithoutSteamInputSchema } from './UserUncheckedCreateWithoutSteamInputSchema';
import { UserCreateOrConnectWithoutSteamInputSchema } from './UserCreateOrConnectWithoutSteamInputSchema';
import { UserUpsertWithoutSteamInputSchema } from './UserUpsertWithoutSteamInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSteamInputSchema } from './UserUpdateToOneWithWhereWithoutSteamInputSchema';
import { UserUpdateWithoutSteamInputSchema } from './UserUpdateWithoutSteamInputSchema';
import { UserUncheckedUpdateWithoutSteamInputSchema } from './UserUncheckedUpdateWithoutSteamInputSchema';

export const UserUpdateOneRequiredWithoutSteamNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutSteamNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSteamInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSteamInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSteamInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSteamInputSchema),z.lazy(() => UserUpdateWithoutSteamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutSteamNestedInputSchema;
