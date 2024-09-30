import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileCreateNestedOneWithoutUserInputSchema } from './SteamProfileCreateNestedOneWithoutUserInputSchema';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorCreateNestedManyWithoutUserInputSchema } from './AuthenticatorCreateNestedManyWithoutUserInputSchema';
import { SteamUserCreateNestedOneWithoutUserInputSchema } from './SteamUserCreateNestedOneWithoutUserInputSchema';
import { TourneysCreateNestedManyWithoutCreatedByInputSchema } from './TourneysCreateNestedManyWithoutCreatedByInputSchema';

export const UserCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  steam: z.lazy(() => SteamProfileCreateNestedOneWithoutUserInputSchema).optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  steamUser: z.lazy(() => SteamUserCreateNestedOneWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserCreateWithoutSessionsInputSchema;
