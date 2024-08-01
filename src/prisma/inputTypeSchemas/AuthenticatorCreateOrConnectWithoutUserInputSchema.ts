import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorWhereUniqueInputSchema } from './AuthenticatorWhereUniqueInputSchema';
import { AuthenticatorCreateWithoutUserInputSchema } from './AuthenticatorCreateWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateWithoutUserInputSchema } from './AuthenticatorUncheckedCreateWithoutUserInputSchema';

export const AuthenticatorCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorCreateOrConnectWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default AuthenticatorCreateOrConnectWithoutUserInputSchema;
