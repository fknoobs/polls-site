import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserWhereInputSchema } from './UserWhereInputSchema';
import { UserUpdateWithoutTourneysInputSchema } from './UserUpdateWithoutTourneysInputSchema';
import { UserUncheckedUpdateWithoutTourneysInputSchema } from './UserUncheckedUpdateWithoutTourneysInputSchema';

export const UserUpdateToOneWithWhereWithoutTourneysInputSchema: z.ZodType<Prisma.UserUpdateToOneWithWhereWithoutTourneysInput> = z.object({
  where: z.lazy(() => UserWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => UserUpdateWithoutTourneysInputSchema),z.lazy(() => UserUncheckedUpdateWithoutTourneysInputSchema) ]),
}).strict();

export default UserUpdateToOneWithWhereWithoutTourneysInputSchema;
