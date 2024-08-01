import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorIncludeSchema } from '../inputTypeSchemas/AuthenticatorIncludeSchema'
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'
import { AuthenticatorOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthenticatorOrderByWithRelationInputSchema'
import { AuthenticatorWhereUniqueInputSchema } from '../inputTypeSchemas/AuthenticatorWhereUniqueInputSchema'
import { AuthenticatorScalarFieldEnumSchema } from '../inputTypeSchemas/AuthenticatorScalarFieldEnumSchema'
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

export const AuthenticatorFindManyArgsSchema: z.ZodType<Prisma.AuthenticatorFindManyArgs> = z.object({
  select: AuthenticatorSelectSchema.optional(),
  include: AuthenticatorIncludeSchema.optional(),
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ AuthenticatorScalarFieldEnumSchema,AuthenticatorScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default AuthenticatorFindManyArgsSchema;
