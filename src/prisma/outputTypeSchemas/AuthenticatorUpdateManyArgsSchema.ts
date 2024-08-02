import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuthenticatorUpdateManyMutationInputSchema'
import { AuthenticatorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuthenticatorUncheckedUpdateManyInputSchema'
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'

export const AuthenticatorUpdateManyArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateManyArgs> = z.object({
  data: z.union([ AuthenticatorUpdateManyMutationInputSchema,AuthenticatorUncheckedUpdateManyInputSchema ]),
  where: AuthenticatorWhereInputSchema.optional(),
}).strict() ;

export default AuthenticatorUpdateManyArgsSchema;
