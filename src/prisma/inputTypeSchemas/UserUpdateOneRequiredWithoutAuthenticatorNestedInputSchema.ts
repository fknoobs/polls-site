import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAuthenticatorInputSchema } from './UserCreateWithoutAuthenticatorInputSchema';
import { UserUncheckedCreateWithoutAuthenticatorInputSchema } from './UserUncheckedCreateWithoutAuthenticatorInputSchema';
import { UserCreateOrConnectWithoutAuthenticatorInputSchema } from './UserCreateOrConnectWithoutAuthenticatorInputSchema';
import { UserUpsertWithoutAuthenticatorInputSchema } from './UserUpsertWithoutAuthenticatorInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema } from './UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema';
import { UserUpdateWithoutAuthenticatorInputSchema } from './UserUpdateWithoutAuthenticatorInputSchema';
import { UserUncheckedUpdateWithoutAuthenticatorInputSchema } from './UserUncheckedUpdateWithoutAuthenticatorInputSchema';

export const UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutAuthenticatorNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutAuthenticatorInputSchema),z.lazy(() => UserUpdateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedUpdateWithoutAuthenticatorInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutAuthenticatorNestedInputSchema;
