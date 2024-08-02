import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserUpdateWithoutTourneysInputSchema } from './UserUpdateWithoutTourneysInputSchema';
import { UserUncheckedUpdateWithoutTourneysInputSchema } from './UserUncheckedUpdateWithoutTourneysInputSchema';
import { UserCreateWithoutTourneysInputSchema } from './UserCreateWithoutTourneysInputSchema';
import { UserUncheckedCreateWithoutTourneysInputSchema } from './UserUncheckedCreateWithoutTourneysInputSchema';
import { UserWhereInputSchema } from './UserWhereInputSchema';

export const UserUpsertWithoutTourneysInputSchema: z.ZodType<Prisma.UserUpsertWithoutTourneysInput> = z.object({
  update: z.union([ z.lazy(() => UserUpdateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTourneysInputSchema) ]),
  create: z.union([ z.lazy(() => UserCreateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedCreateWithoutTourneysInputSchema) ]),
  where: z.lazy(() => UserWhereInputSchema).optional()
}).strict();

export default UserUpsertWithoutTourneysInputSchema;
