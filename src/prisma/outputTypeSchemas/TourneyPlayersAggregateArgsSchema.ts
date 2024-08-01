import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'
import { TourneyPlayersOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneyPlayersOrderByWithRelationInputSchema'
import { TourneyPlayersWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereUniqueInputSchema'

export const TourneyPlayersAggregateArgsSchema: z.ZodType<Prisma.TourneyPlayersAggregateArgs> = z.object({
  where: TourneyPlayersWhereInputSchema.optional(),
  orderBy: z.union([ TourneyPlayersOrderByWithRelationInputSchema.array(),TourneyPlayersOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneyPlayersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default TourneyPlayersAggregateArgsSchema;
