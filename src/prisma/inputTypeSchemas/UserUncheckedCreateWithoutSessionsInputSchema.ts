import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AccountUncheckedCreateNestedManyWithoutUserInputSchema } from './AccountUncheckedCreateNestedManyWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema } from './AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema';
import { TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema } from './TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema';

export const UserUncheckedCreateWithoutSessionsInputSchema: z.ZodType<Prisma.UserUncheckedCreateWithoutSessionsInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  emailVerified: z.coerce.date().optional().nullable(),
  image: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Authenticator: z.lazy(() => AuthenticatorUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  Tourneys: z.lazy(() => TourneysUncheckedCreateNestedManyWithoutCreatedByInputSchema).optional()
}).strict();

export default UserUncheckedCreateWithoutSessionsInputSchema;
