import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProfileUncheckedCreateInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  userId: z.string(),
  displayName: z.string(),
  steamId: z.string().optional().nullable(),
  steamProfile: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProfileUncheckedCreateInputSchema;