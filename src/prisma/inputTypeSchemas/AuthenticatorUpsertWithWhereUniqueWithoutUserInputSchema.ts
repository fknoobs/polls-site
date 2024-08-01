import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorWhereUniqueInputSchema } from './AuthenticatorWhereUniqueInputSchema';
import { AuthenticatorUpdateWithoutUserInputSchema } from './AuthenticatorUpdateWithoutUserInputSchema';
import { AuthenticatorUncheckedUpdateWithoutUserInputSchema } from './AuthenticatorUncheckedUpdateWithoutUserInputSchema';
import { AuthenticatorCreateWithoutUserInputSchema } from './AuthenticatorCreateWithoutUserInputSchema';
import { AuthenticatorUncheckedCreateWithoutUserInputSchema } from './AuthenticatorUncheckedCreateWithoutUserInputSchema';

export const AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpsertWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => AuthenticatorCreateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedCreateWithoutUserInputSchema) ]),
}).strict();

export default AuthenticatorUpsertWithWhereUniqueWithoutUserInputSchema;
