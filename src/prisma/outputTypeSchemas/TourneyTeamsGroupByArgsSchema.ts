import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'
import { TourneyTeamsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/TourneyTeamsOrderByWithAggregationInputSchema'
import { TourneyTeamsScalarFieldEnumSchema } from '../inputTypeSchemas/TourneyTeamsScalarFieldEnumSchema'
import { TourneyTeamsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/TourneyTeamsScalarWhereWithAggregatesInputSchema'

export const TourneyTeamsGroupByArgsSchema: z.ZodType<Prisma.TourneyTeamsGroupByArgs> = z.object({
  where: TourneyTeamsWhereInputSchema.optional(),
  orderBy: z.union([ TourneyTeamsOrderByWithAggregationInputSchema.array(),TourneyTeamsOrderByWithAggregationInputSchema ]).optional(),
  by: TourneyTeamsScalarFieldEnumSchema.array(),
  having: TourneyTeamsScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneyTeamsGroupByArgsSchema;
