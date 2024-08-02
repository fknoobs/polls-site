import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsIncludeSchema } from '../inputTypeSchemas/TourneyTeamsIncludeSchema'
import { TourneyTeamsWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyTeamsWhereUniqueInputSchema'
import { TourneyTeamsCreateInputSchema } from '../inputTypeSchemas/TourneyTeamsCreateInputSchema'
import { TourneyTeamsUncheckedCreateInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedCreateInputSchema'
import { TourneyTeamsUpdateInputSchema } from '../inputTypeSchemas/TourneyTeamsUpdateInputSchema'
import { TourneyTeamsUncheckedUpdateInputSchema } from '../inputTypeSchemas/TourneyTeamsUncheckedUpdateInputSchema'
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

export const TourneyTeamsUpsertArgsSchema: z.ZodType<Prisma.TourneyTeamsUpsertArgs> = z.object({
  select: TourneyTeamsSelectSchema.optional(),
  include: TourneyTeamsIncludeSchema.optional(),
  where: TourneyTeamsWhereUniqueInputSchema,
  create: z.union([ TourneyTeamsCreateInputSchema,TourneyTeamsUncheckedCreateInputSchema ]),
  update: z.union([ TourneyTeamsUpdateInputSchema,TourneyTeamsUncheckedUpdateInputSchema ]),
}).strict() ;

export default TourneyTeamsUpsertArgsSchema;
