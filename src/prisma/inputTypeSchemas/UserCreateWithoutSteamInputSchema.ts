import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountCreateNestedManyWithoutUserInputSchema } from './AccountCreateNestedManyWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorCreateNestedManyWithoutUserInputSchema } from './AuthenticatorCreateNestedManyWithoutUserInputSchema';
import { TourneysCreateNestedManyWithoutCreatedByInputSchema } from './TourneysCreateNestedManyWithoutCreatedByInputSchema';

export const UserCreateWithoutSteamInputSchema: z.ZodType<Prisma.UserCreateWithoutSteamInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  role: z.string().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserCreateWithoutSteamInputSchema;
