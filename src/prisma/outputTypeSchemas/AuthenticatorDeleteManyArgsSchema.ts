import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'

export const AuthenticatorDeleteManyArgsSchema: z.ZodType<Prisma.AuthenticatorDeleteManyArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AuthenticatorDeleteManyArgsSchema;
