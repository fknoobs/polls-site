import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutSteamUserInputSchema } from './UserCreateWithoutSteamUserInputSchema';
import { UserUncheckedCreateWithoutSteamUserInputSchema } from './UserUncheckedCreateWithoutSteamUserInputSchema';
import { UserCreateOrConnectWithoutSteamUserInputSchema } from './UserCreateOrConnectWithoutSteamUserInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutSteamUserInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutSteamUserInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSteamUserInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutSteamUserInputSchema;
