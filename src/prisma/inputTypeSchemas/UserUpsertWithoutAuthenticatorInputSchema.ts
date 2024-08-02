import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutAuthenticatorInputSchema } from './UserUpdateWithoutAuthenticatorInputSchema';
import { UserUncheckedUpdateWithoutAuthenticatorInputSchema } from './UserUncheckedUpdateWithoutAuthenticatorInputSchema';
import { UserCreateWithoutAuthenticatorInputSchema } from './UserCreateWithoutAuthenticatorInputSchema';
import { UserUncheckedCreateWithoutAuthenticatorInputSchema } from './UserUncheckedCreateWithoutAuthenticatorInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserUpsertWithoutAuthenticatorInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutAuthenticatorInputSchema;
