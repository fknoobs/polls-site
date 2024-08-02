import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AuthenticatorWhereInputSchema } from './AuthenticatorWhereInputSchema';

export const AuthenticatorListRelationFilterSchema: z.ZodType<Prisma.AuthenticatorListRelationFilter> = z.object({
  every: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  some: z.lazy(() => AuthenticatorWhereInputSchema).optional(),
  none: z.lazy(() => AuthenticatorWhereInputSchema).optional()
}).strict();

export default AuthenticatorListRelationFilterSchema;
