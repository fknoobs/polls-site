import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorCreateManyInputSchema } from '../inputTypeSchemas/AuthenticatorCreateManyInputSchema'

export const AuthenticatorCreateManyAndReturnArgsSchema: z.ZodType<Prisma.AuthenticatorCreateManyAndReturnArgs> = z.object({
  data: z.union([ AuthenticatorCreateManyInputSchema,AuthenticatorCreateManyInputSchema.array() ]),
}).strict() ;

export default AuthenticatorCreateManyAndReturnArgsSchema;
