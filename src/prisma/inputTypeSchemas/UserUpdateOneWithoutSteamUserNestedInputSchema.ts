import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSteamUserInputSchema } from './UserCreateWithoutSteamUserInputSchema';
import { UserUncheckedCreateWithoutSteamUserInputSchema } from './UserUncheckedCreateWithoutSteamUserInputSchema';
import { UserCreateOrConnectWithoutSteamUserInputSchema } from './UserCreateOrConnectWithoutSteamUserInputSchema';
import { UserUpsertWithoutSteamUserInputSchema } from './UserUpsertWithoutSteamUserInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutSteamUserInputSchema } from './UserUpdateToOneWithWhereWithoutSteamUserInputSchema';
import { UserUpdateWithoutSteamUserInputSchema } from './UserUpdateWithoutSteamUserInputSchema';
import { UserUncheckedUpdateWithoutSteamUserInputSchema } from './UserUncheckedUpdateWithoutSteamUserInputSchema';

export const UserUpdateOneWithoutSteamUserNestedInputSchema: z.ZodType<Prisma.UserUpdateOneWithoutSteamUserNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSteamUserInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutSteamUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => UserWhereInputSchema) ]).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutSteamUserInputSchema),z.lazy(() => UserUpdateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamUserInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneWithoutSteamUserNestedInputSchema;
