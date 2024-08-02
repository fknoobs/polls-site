import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProfileUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProfileUncheckedCreateWithoutUserInput> = z.object({
  id: z.string().cuid().optional(),
  displayName: z.string(),
  steamId: z.string().optional().nullable(),
  steamProfile: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ProfileUncheckedCreateWithoutUserInputSchema;
