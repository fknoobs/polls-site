import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProfileCreateNestedOneWithoutUserInputSchema } from './ProfileCreateNestedOneWithoutUserInputSchema';
import { SessionCreateNestedManyWithoutUserInputSchema } from './SessionCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorCreateNestedManyWithoutUserInputSchema } from './AuthenticatorCreateNestedManyWithoutUserInputSchema';
import { TourneysCreateNestedManyWithoutCreatedByInputSchema } from './TourneysCreateNestedManyWithoutCreatedByInputSchema';

export const UserCreateWithoutAccountsInputSchema: z.ZodType<Prisma.UserCreateWithoutAccountsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  profile: z.lazy(() => ProfileCreateNestedOneWithoutUserInputSchema).optional(),
  sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorCreateNestedManyWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserCreateWithoutAccountsInputSchema;