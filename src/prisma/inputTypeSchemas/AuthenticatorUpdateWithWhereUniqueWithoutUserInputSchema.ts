import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorWhereUniqueInputSchema } from './AuthenticatorWhereUniqueInputSchema';
import { AuthenticatorUpdateWithoutUserInputSchema } from './AuthenticatorUpdateWithoutUserInputSchema';
import { AuthenticatorUncheckedUpdateWithoutUserInputSchema } from './AuthenticatorUncheckedUpdateWithoutUserInputSchema';

export const AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateWithWhereUniqueWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateWithoutUserInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateWithoutUserInputSchema) ]),
}).strict();

export default AuthenticatorUpdateWithWhereUniqueWithoutUserInputSchema;
