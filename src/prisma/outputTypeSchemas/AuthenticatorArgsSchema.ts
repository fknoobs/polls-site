import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorSelectSchema } from '../inputTypeSchemas/AuthenticatorSelectSchema';
import { AuthenticatorIncludeSchema } from '../inputTypeSchemas/AuthenticatorIncludeSchema';

export const AuthenticatorArgsSchema: z.ZodType<Prisma.AuthenticatorDefaultArgs> = z.object({
  select: z.lazy(() => AuthenticatorSelectSchema).optional(),
  include: z.lazy(() => AuthenticatorIncludeSchema).optional(),
}).strict();

export default AuthenticatorArgsSchema;
