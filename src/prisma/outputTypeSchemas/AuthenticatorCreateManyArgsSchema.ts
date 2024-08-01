import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorCreateManyInputSchema } from '../inputTypeSchemas/AuthenticatorCreateManyInputSchema'

export const AuthenticatorCreateManyArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
}).strict() ;

export default AuthenticatorCreateManyArgsSchema;
