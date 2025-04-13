import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorIncludeSchema } from '../inputTypeSchemas/AuthenticatorIncludeSchema'
import { AuthenticatorWhereUniqueInputSchema } from '../inputTypeSchemas/AuthenticatorWhereUniqueInputSchema'
import { AuthenticatorCreateInputSchema } from '../inputTypeSchemas/AuthenticatorCreateInputSchema'
import { AuthenticatorUncheckedCreateInputSchema } from '../inputTypeSchemas/AuthenticatorUncheckedCreateInputSchema'
import { AuthenticatorUpdateInputSchema } from '../inputTypeSchemas/AuthenticatorUpdateInputSchema'
import { AuthenticatorUncheckedUpdateInputSchema } from '../inputTypeSchemas/AuthenticatorUncheckedUpdateInputSchema'
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

export const AuthenticatorUpsertArgsSchema: z.ZodType<Prisma.AuthenticatorUpsertArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: z.lazy(() => AuthenticatorIncludeSchema).optional(),
  where: AuthenticatorWhereUniqueInputSchema,
  create: z.union([ AuthenticatorCreateInputSchema,AuthenticatorUncheckedCreateInputSchema ]),
  update: z.union([ AuthenticatorUpdateInputSchema,AuthenticatorUncheckedUpdateInputSchema ]),
}).strict() ;

export default AuthenticatorUpsertArgsSchema;
