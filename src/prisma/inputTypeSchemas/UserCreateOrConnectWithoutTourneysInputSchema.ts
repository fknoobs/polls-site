import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereUniqueInputSchema } from './UserWhereUniqueInputSchema';
import { UserCreateWithoutTourneysInputSchema } from './UserCreateWithoutTourneysInputSchema';
import { UserUncheckedCreateWithoutTourneysInputSchema } from './UserUncheckedCreateWithoutTourneysInputSchema';

export const UserCreateOrConnectWithoutTourneysInputSchema: z.ZodType<Prisma.UserCreateOrConnectWithoutTourneysInput> = z.object({
  where: z.lazy(() => UserWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserCreateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedCreateWithoutTourneysInputSchema) ]),
}).strict();

export default UserCreateOrConnectWithoutTourneysInputSchema;
