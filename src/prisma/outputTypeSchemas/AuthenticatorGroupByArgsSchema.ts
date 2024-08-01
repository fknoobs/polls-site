import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'
import { AuthenticatorOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AuthenticatorOrderByWithAggregationInputSchema'
import { AuthenticatorScalarFieldEnumSchema } from '../inputTypeSchemas/AuthenticatorScalarFieldEnumSchema'
import { AuthenticatorScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AuthenticatorScalarWhereWithAggregatesInputSchema'

export const AuthenticatorGroupByArgsSchema: z.ZodType<Prisma.AuthenticatorGroupByArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithAggregationInputSchema.array(),AuthenticatorOrderByWithAggregationInputSchema ]).optional(),
  by: AuthenticatorScalarFieldEnumSchema.array(),
  having: AuthenticatorScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AuthenticatorGroupByArgsSchema;
