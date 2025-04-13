import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema'
import { TourneyTeamsWhereInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereInputSchema'
import { TourneyTeamsOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneyTeamsOrderByWithRelationInputSchema'
import { TourneyTeamsWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereUniqueInputSchema'
import { TourneyTeamsScalarFieldEnumSchema } from '../inputTypeSchemas/TourneyTeamsScalarFieldEnumSchema'
import { TourneyPlayersFindManyArgsSchema } from "../outputTypeSchemas/TourneyPlayersFindManyArgsSchema"
import { TourneysArgsSchema } from "../outputTypeSchemas/TourneysArgsSchema"
import { TourneyTeamsCountOutputTypeArgsSchema } from "../outputTypeSchemas/TourneyTeamsCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TourneyTeamsSelectSchema: z.ZodType<Prisma.TourneyTeamsSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  tourneyId: z.boolean().optional(),
  players: z.union([z.boolean(),z.lazy(() => TourneyPlayersFindManyArgsSchema)]).optional(),
  tourney: z.union([z.boolean(),z.lazy(() => TourneysArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TourneyTeamsCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TourneyTeamsFindFirstArgsSchema: z.ZodType<Prisma.TourneyTeamsFindFirstArgs> = z.object({
  select: TourneyTeamsSelectSchema.optional(),
  include: z.lazy(() => TourneyTeamsIncludeSchema).optional(),
  where: TourneyTeamsWhereInputSchema.optional(),
  orderBy: z.union([ TourneyTeamsOrderByWithRelationInputSchema.array(),TourneyTeamsOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneyTeamsWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TourneyTeamsScalarFieldEnumSchema,TourneyTeamsScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TourneyTeamsFindFirstArgsSchema;
