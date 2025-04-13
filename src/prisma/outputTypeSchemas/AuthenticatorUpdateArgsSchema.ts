import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorIncludeSchema } from '../inputTypeSchemas/AuthenticatorIncludeSchema'
import { AuthenticatorUpdateInputSchema } from '../inputTypeSchemas/AuthenticatorUpdateInputSchema'
import { AuthenticatorUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuthenticatorUncheckedUpdateInputSchema'
import { AuthenticatorWhereUniqueInputSchema } from '../inputTypeSchemas/AuthenticatorWhereUniqueInputSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const AuthenticatorSelectSchema: z.ZodType<Prisma.AuthenticatorSelect> = z.object({
  credentialID: z.boolean().optional(),
  userId: z.boolean().optional(),
  providerAccountId: z.boolean().optional(),
  credentialPublicKey: z.boolean().optional(),
  counter: z.boolean().optional(),
  credentialDeviceType: z.boolean().optional(),
  credentialBackedUp: z.boolean().optional(),
  transports: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const AuthenticatorUpdateArgsSchema: z.ZodType<Prisma.AuthenticatorUpdateArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: z.lazy(() => AuthenticatorIncludeSchema).optional(),
  data: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
  where: AuthenticatorWhereUniqueInputSchema,
}).strict() ;

export default AuthenticatorUpdateArgsSchema;
