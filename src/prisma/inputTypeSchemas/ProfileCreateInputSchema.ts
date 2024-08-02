import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserCreateNestedOneWithoutProfileInputSchema } from './UserCreateNestedOneWithoutProfileInputSchema';

export const ProfileCreateInputSchema: z.ZodType<Prisma.ProfileCreateInput> = z.object({
  id: z.string().cuid().optional(),
  displayName: z.string(),
  steamId: z.string().optional().nullable(),
  steamProfile: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => UserCreateNestedOneWithoutProfileInputSchema)
}).strict();

export default ProfileCreateInputSchema;
