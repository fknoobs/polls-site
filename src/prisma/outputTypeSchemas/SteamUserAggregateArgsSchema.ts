import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { SteamUserWhereInputSchema } from '../inputTypeSchemas/SteamUserWhereInputSchema'
import { SteamUserOrderByWithRelationInputSchema } from '../inputTypeSchemas/SteamUserOrderByWithRelationInputSchema'
import { SteamUserWhereUniqueInputSchema } from '../inputTypeSchemas/SteamUserWhereUniqueInputSchema'

export const SteamUserAggregateArgsSchema: z.ZodType<Prisma.SteamUserAggregateArgs> = z.object({
  where: SteamUserWhereInputSchema.optional(),
  orderBy: z.union([ SteamUserOrderByWithRelationInputSchema.array(),SteamUserOrderByWithRelationInputSchema ]).optional(),
  cursor: SteamUserWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default SteamUserAggregateArgsSchema;
