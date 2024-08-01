import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'
import { TourneyTeamsOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneyTeamsOrderByWithRelationInputSchema'
import { TourneyTeamsWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereUniqueInputSchema'

export const TourneyTeamsAggregateArgsSchema: z.ZodType<Prisma.TourneyTeamsAggregateArgs> = z.object({
  where: TourneyTeamsWhereInputSchema.optional(),
  orderBy: z.union([ TourneyTeamsOrderByWithRelationInputSchema.array(),TourneyTeamsOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneyTeamsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneyTeamsAggregateArgsSchema;
