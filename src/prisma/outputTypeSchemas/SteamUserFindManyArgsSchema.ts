import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserIncludeSchema } from '../inputTypeSchemas/SteamUserIncludeSchema'
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'
import { SteamUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/SteamUserOrderByWithRelationInputSchema'
import { SteamUserWhereUniqueInputSchema } from '../inputTypeSchemas/SteamUserWhereUniqueInputSchema'
import { SteamUserScalarFieldEnumSchema } from '../inputTypeSchemas/SteamUserScalarFieldEnumSchema'
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SteamUserSelectSchema: z.ZodType<Prisma.SteamUserSelect> = z.object({
  steamId: z.boolean().optional(),
  userId: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
}).strict()

export const SteamUserFindManyArgsSchema: z.ZodType<Prisma.SteamUserFindManyArgs> = z.object({
  select: SteamUserSelectSchema.optional(),
  include: SteamUserIncludeSchema.optional(),
  where: SteamUserWhereInputSchema.optional(),
  orderBy: z.union([ SteamUserOrderByWithRelationInputSchema.array(),SteamUserOrderByWithRelationInputSchema ]).optional(),
  cursor: SteamUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SteamUserScalarFieldEnumSchema,SteamUserScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default SteamUserFindManyArgsSchema;
