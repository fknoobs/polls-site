import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema'
import { TourneyTeamsWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereUniqueInputSchema'
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

export const TourneyTeamsFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TourneyTeamsFindUniqueOrThrowArgs> = z.object({
  select: TourneyTeamsSelectSchema.optional(),
  include: TourneyTeamsIncludeSchema.optional(),
  where: TourneyTeamsWhereUniqueInputSchema,
}).strict() ;

export default TourneyTeamsFindUniqueOrThrowArgsSchema;
