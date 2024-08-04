import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'
import { SteamProfileOrderByWithAggregationInputSchema } from '../inputTypeSchemas/SteamProfileOrderByWithAggregationInputSchema'
import { SteamProfileScalarFieldEnumSchema } from '../inputTypeSchemas/SteamProfileScalarFieldEnumSchema'
import { SteamProfileScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/SteamProfileScalarWhereWithAggregatesInputSchema'

export const SteamProfileGroupByArgsSchema: z.ZodType<Prisma.SteamProfileGroupByArgs> = z.object({
  where: SteamProfileWhereInputSchema.optional(),
  orderBy: z.union([ SteamProfileOrderByWithAggregationInputSchema.array(),SteamProfileOrderByWithAggregationInputSchema ]).optional(),
  by: SteamProfileScalarFieldEnumSchema.array(),
  having: SteamProfileScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SteamProfileGroupByArgsSchema;
