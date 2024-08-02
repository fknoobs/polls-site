import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorCreateManyUserInputSchema } from './AuthenticatorCreateManyUserInputSchema';

export const AuthenticatorCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.AuthenticatorCreateManyUserInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AuthenticatorCreateManyUserInputSchema),z.lazy(() => AuthenticatorCreateManyUserInputSchema).array() ]),
}).strict();

export default AuthenticatorCreateManyUserInputEnvelopeSchema;
