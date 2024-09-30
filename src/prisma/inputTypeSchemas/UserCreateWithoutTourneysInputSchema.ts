import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SteamProfileCreateNestedOneWithoutUserInputSchema } from './SteamProfileCreateNestedOneWithoutUserInputSchema';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorCreateNestedManyWithoutUserInputSchema } from './AuthenticatorCreateNestedManyWithoutUserInputSchema';
import { SteamUserCreateNestedOneWithoutUserInputSchema } from './SteamUserCreateNestedOneWithoutUserInputSchema';

export const UserCreateWithoutTourneysInputSchema: z.ZodType<Prisma.UserCreateWithoutTourneysInput> = z.object({
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
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  steamUser: z.lazy(() => SteamUserCreateNestedOneWithoutUserInputSchema).optional()
}).strict();

export default UserCreateWithoutTourneysInputSchema;
