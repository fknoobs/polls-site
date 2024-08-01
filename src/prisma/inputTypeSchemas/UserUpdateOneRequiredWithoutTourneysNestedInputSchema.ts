import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateWithoutTourneysInputSchema } from './UserCreateWithoutTourneysInputSchema';
import { UserUncheckedCreateWithoutTourneysInputSchema } from './UserUncheckedCreateWithoutTourneysInputSchema';
import { UserCreateOrConnectWithoutTourneysInputSchema } from './UserCreateOrConnectWithoutTourneysInputSchema';
import { UserUpsertWithoutTourneysInputSchema } from './UserUpsertWithoutTourneysInputSchema';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserUpdateToOneWithWhereWithoutTourneysInputSchema } from './UserUpdateToOneWithWhereWithoutTourneysInputSchema';
import { UserUpdateWithoutTourneysInputSchema } from './UserUpdateWithoutTourneysInputSchema';
import { UserUncheckedUpdateWithoutTourneysInputSchema } from './UserUncheckedUpdateWithoutTourneysInputSchema';

export const UserUpdateOneRequiredWithoutTourneysNestedInputSchema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutTourneysNestedInput> = z.object({
  create: z.union([ z.lazy(() => UserCreateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedCreateWithoutTourneysInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTourneysInputSchema).optional(),
  upsert: z.lazy(() => UserUpsertWithoutTourneysInputSchema).optional(),
  connect: z.lazy(() => UserWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => UserUpdateToOneWithWhereWithoutTourneysInputSchema),z.lazy(() => UserUpdateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTourneysInputSchema) ]).optional(),
}).strict();

export default UserUpdateOneRequiredWithoutTourneysNestedInputSchema;
