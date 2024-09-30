import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'
import { SteamUserOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SteamUserOrderByWithAggregationInputSchema'
import { SteamUserScalarFieldEnumSchema } from '../inputTypeSchemas/SteamUserScalarFieldEnumSchema'
import { SteamUserScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SteamUserScalarWhereWithAggregatesInputSchema'

export const SteamUserGroupByArgsSchema: z.ZodType<Prisma.SteamUserGroupByArgs> = z.object({
  where: SteamUserWhereInputSchema.optional(),
  orderBy: z.union([ SteamUserOrderByWithAggregationInputSchema.array(),SteamUserOrderByWithAggregationInputSchema ]).optional(),
  by: SteamUserScalarFieldEnumSchema.array(),
  having: SteamUserScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SteamUserGroupByArgsSchema;
