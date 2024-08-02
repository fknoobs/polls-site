import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AuthenticatorWhereInputSchema } from '../inputTypeSchemas/AuthenticatorWhereInputSchema'
import { AuthenticatorOrderByWithRelationInputSchema } from '../inputTypeSchemas/AuthenticatorOrderByWithRelationInputSchema'
import { AuthenticatorWhereUniqueInputSchema } from '../inputTypeSchemas/AuthenticatorWhereUniqueInputSchema'

export const AuthenticatorAggregateArgsSchema: z.ZodType<Prisma.AuthenticatorAggregateArgs> = z.object({
  where: AuthenticatorWhereInputSchema.optional(),
  orderBy: z.union([ AuthenticatorOrderByWithRelationInputSchema.array(),AuthenticatorOrderByWithRelationInputSchema ]).optional(),
  cursor: AuthenticatorWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AuthenticatorAggregateArgsSchema;
