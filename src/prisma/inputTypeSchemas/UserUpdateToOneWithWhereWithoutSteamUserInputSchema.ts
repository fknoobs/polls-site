import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutSteamUserInputSchema } from './UserUpdateWithoutSteamUserInputSchema';
import { UserUncheckedUpdateWithoutSteamUserInputSchema } from './UserUncheckedUpdateWithoutSteamUserInputSchema';

export const UserUpdateToOneWithWhereWithoutSteamUserInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutSteamUserInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutSteamUserInputSchema),z.lazy(() => UserUncheckedUpdateWithoutSteamUserInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutSteamUserInputSchema;
