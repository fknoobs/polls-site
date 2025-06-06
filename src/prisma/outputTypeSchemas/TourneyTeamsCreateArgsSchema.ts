import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema'
import { TourneyTeamsCreateInputSchema } from '../inputTypeSchemas/TourneyTeamsCreateInputSchema'
import { TourneyTeamsUncheckedCreateInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedCreateInputSchema'
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

export const TourneyTeamsCreateArgsSchema: z.ZodType<Prisma.TourneyTeamsCreateArgs> = z.object({
  select: TourneyTeamsSelectSchema.optional(),
  include: z.lazy(() => TourneyTeamsIncludeSchema).optional(),
  data: z.union([ TourneyTeamsCreateInputSchema,TourneyTeamsUncheckedCreateInputSchema ]),
}).strict() ;

export default TourneyTeamsCreateArgsSchema;
