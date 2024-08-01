import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'
import { TourneyPlayersOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TourneyPlayersOrderByWithAggregationInputSchema'
import { TourneyPlayersScalarFieldEnumSchema } from '../inputTypeSchemas/TourneyPlayersScalarFieldEnumSchema'
import { TourneyPlayersScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TourneyPlayersScalarWhereWithAggregatesInputSchema'

export const TourneyPlayersGroupByArgsSchema: z.ZodType<Prisma.TourneyPlayersGroupByArgs> = z.object({
  where: TourneyPlayersWhereInputSchema.optional(),
  orderBy: z.union([ TourneyPlayersOrderByWithAggregationInputSchema.array(),TourneyPlayersOrderByWithAggregationInputSchema ]).optional(),
  by: TourneyPlayersScalarFieldEnumSchema.array(),
  having: TourneyPlayersScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneyPlayersGroupByArgsSchema;
