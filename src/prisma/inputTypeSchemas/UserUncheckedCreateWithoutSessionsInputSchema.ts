import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileUncheckedCreateNestedOneWithoutUserInputSchema } from './SteamProfileUncheckedCreateNestedOneWithoutUserInputSchema';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema } from './AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema';
import { TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema';

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  steam: z.lazy(() => SteamProfileUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionsInputSchema;
