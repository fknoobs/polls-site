import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorUpdateManyMutationInputSchema } from '../inputTypeSchemas/AuthenticatorUpdateManyMutationInputSchema'
import { AuthenticatorUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/AuthenticatorUncheckedUpdateManyInputSchema'
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'

export const AuthenticatorUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateManyAndReturnArgs> = z.object({
  data: z.union([ AuthenticatorUpdateManyMutationInputSchema,AuthenticatorUncheckedUpdateManyInputSchema ]),
  where: AuthenticatorWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default AuthenticatorUpdateManyAndReturnArgsSchema;
