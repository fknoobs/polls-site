import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSteamUserInputSchema } from './UserCreateWithoutSteamUserInputSchema';
import { UserUncheckedCreateWithoutSteamUserInputSchema } from './UserUncheckedCreateWithoutSteamUserInputSchema';

export const UserCreateOrConnectWithoutSteamUserInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSteamUserInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamUserInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSteamUserInputSchema;
