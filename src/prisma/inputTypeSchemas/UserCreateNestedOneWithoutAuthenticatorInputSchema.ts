import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutAuthenticatorInputSchema } from './UserCreateWithoutAuthenticatorInputSchema';
import { UserUncheckedCreateWithoutAuthenticatorInputSchema } from './UserUncheckedCreateWithoutAuthenticatorInputSchema';
import { UserCreateOrConnectWithoutAuthenticatorInputSchema } from './UserCreateOrConnectWithoutAuthenticatorInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutAuthenticatorInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutAuthenticatorInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutAuthenticatorInputSchema),z.lazy(() => UserUncheckedCreateWithoutAuthenticatorInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutAuthenticatorInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutAuthenticatorInputSchema;
