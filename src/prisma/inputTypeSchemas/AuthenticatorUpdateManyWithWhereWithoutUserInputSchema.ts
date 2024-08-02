import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorScalarWhereInputSchema } from './AuthenticatorScalarWhereInputSchema';
import { AuthenticatorUpdateManyMutationInputSchema } from './AuthenticatorUpdateManyMutationInputSchema';
import { AuthenticatorUncheckedUpdateManyWithoutUserInputSchema } from './AuthenticatorUncheckedUpdateManyWithoutUserInputSchema';

export const AuthenticatorUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.AuthenticatorUpdateManyWithWhereWithoutUserInput> = z.object({
  where: z.lazy(() => AuthenticatorScalarWhereInputSchema),
  data: z.union([ z.lazy(() => AuthenticatorUpdateManyMutationInputSchema),z.lazy(() => AuthenticatorUncheckedUpdateManyWithoutUserInputSchema) ]),
}).strict();

export default AuthenticatorUpdateManyWithWhereWithoutUserInputSchema;
