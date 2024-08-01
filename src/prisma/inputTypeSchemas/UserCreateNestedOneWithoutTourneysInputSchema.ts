import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTourneysInputSchema } from './UserCreateWithoutTourneysInputSchema';
import { UserUncheckedCreateWithoutTourneysInputSchema } from './UserUncheckedCreateWithoutTourneysInputSchema';
import { UserCreateOrConnectWithoutTourneysInputSchema } from './UserCreateOrConnectWithoutTourneysInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';

export const UserCreateNestedOneWithoutTourneysInputSchema: z.ZodType<Prisma.UserCreateNestedOneWithoutTourneysInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedCreateWithoutTourneysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTourneysInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional()
}).strict();

export default UserCreateNestedOneWithoutTourneysInputSchema;
