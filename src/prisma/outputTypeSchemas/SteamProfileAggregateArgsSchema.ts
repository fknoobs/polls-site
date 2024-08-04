import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamProfileWhereInputSchema } from '../inputTypeSchemas/SteamProfileWhereInputSchema'
import { SteamProfileOrderByWithRelationInputSchema } from '../inputTypeSchemas/SteamProfileOrderByWithRelationInputSchema'
import { SteamProfileWhereUniqueInputSchema } from '../inputTypeSchemas/SteamProfileWhereUniqueInputSchema'

export const SteamProfileAggregateArgsSchema: z.ZodType<Prisma.SteamProfileAggregateArgs> = z.object({
  where: SteamProfileWhereInputSchema.optional(),
  orderBy: z.union([ SteamProfileOrderByWithRelationInputSchema.array(),SteamProfileOrderByWithRelationInputSchema ]).optional(),
  cursor: SteamProfileWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SteamProfileAggregateArgsSchema;
