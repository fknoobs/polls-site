import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema'
import { TourneyTeamsUpdateInputSchema } from '../inputTypeSchemas/TourneyTeamsUpdateInputSchema'
import { TourneyTeamsUncheckedUpdateInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedUpdateInputSchema'
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

export const TourneyTeamsUpdateArgsSchema: z.ZodType<Prisma.TourneyTeamsUpdateArgs> = z.object({
  select: TourneyTeamsSelectSchema.optional(),
  include: z.lazy(() => TourneyTeamsIncludeSchema).optional(),
  data: z.union([ TourneyTeamsUpdateInputSchema,TourneyTeamsUncheckedUpdateInputSchema ]),
  where: TourneyTeamsWhereUniqueInputSchema,
}).strict() ;

export default TourneyTeamsUpdateArgsSchema;
