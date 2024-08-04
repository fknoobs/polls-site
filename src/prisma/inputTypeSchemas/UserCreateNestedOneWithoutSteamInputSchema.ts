import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSteamInputSchema } from './UserCreateWithoutSteamInputSchema';
import { UserUncheckedCreateWithoutSteamInputSchema } from './UserUncheckedCreateWithoutSteamInputSchema';
import { UserCreateOrConnectWithoutSteamInputSchema } from './UserCreateOrConnectWithoutSteamInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSteamInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSteamInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSteamInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSteamInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSteamInputSchema;
