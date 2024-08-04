import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutSteamInputSchema } from './UserCreateWithoutSteamInputSchema';
import { UserUncheckedCreateWithoutSteamInputSchema } from './UserUncheckedCreateWithoutSteamInputSchema';

export const UserCreateOrConnectWithoutSteamInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutSteamInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutSteamInputSchema),z.lazy(() => UserUncheckedCreateWithoutSteamInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutSteamInputSchema;
