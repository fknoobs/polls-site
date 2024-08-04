import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSteamInputSchema } from './UserUpdateWithoutSteamInputSchema';
import { UserUncheckedUpdateWithoutSteamInputSchema } from './UserUncheckedUpdateWithoutSteamInputSchema';

export const UserUpdateToOneWithWhereWithoutSteamInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSteamInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSteamInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSteamInputSchema;
