import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { SessionUncheckedCreateNestedManyWithoutUserInputSchema } from './SessionUncheckedCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema } from './AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema';
import { SteamUserUncheckedCreateNestedOneWithoutUserInputSchema } from './SteamUserUncheckedCreateNestedOneWithoutUserInputSchema';
import { TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema';

export const UserUncheckedCreateWithoutSteamInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSteamInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  steamUser: z.lazy(() => SteamUserUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSteamInputSchema;
