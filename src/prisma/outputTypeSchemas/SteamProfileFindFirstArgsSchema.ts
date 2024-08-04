import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileIncludeSchema } from '../inputTypeSchemas/SteamProfileIncludeSchema'
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'
import { SteamProfileOrderByWithRelationInputSchema } from '../inputTypeSchemas/SteamProfileOrderByWithRelationInputSchema'
import { SteamProfileWhereUniqueInputSchema } from '../inputTypeSchemas/SteamProfileWhereUniqueInputSchema'
import { SteamProfileScalarFieldEnumSchema } from '../inputTypeSchemas/SteamProfileScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SteamProfileSelectSchema: z.ZodType<Prisma.SteamProfileSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  steamId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SteamProfileFindFirstArgsSchema: z.ZodType<Prisma.SteamProfileFindFirstArgs> = z.object({
  select: SteamProfileSelectSchema.optional(),
  include: SteamProfileIncludeSchema.optional(),
  where: SteamProfileWhereInputSchema.optional(),
  orderBy: z.union([ SteamProfileOrderByWithRelationInputSchema.array(),SteamProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: SteamProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SteamProfileScalarFieldEnumSchema,SteamProfileScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SteamProfileFindFirstArgsSchema;
