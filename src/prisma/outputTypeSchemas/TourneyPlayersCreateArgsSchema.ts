import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersIncludeSchema } from '../inputTypeSchemas/TourneyPlayersIncludeSchema'
import { TourneyPlayersCreateInputSchema } from '../inputTypeSchemas/TourneyPlayersCreateInputSchema'
import { TourneyPlayersUncheckedCreateInputSchema } from '../inputTypeSchemas/TourneyPlayersUncheckedCreateInputSchema'
import { TourneyTeamsArgsSchema } from "../outputTypeSchemas/TourneyTeamsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TourneyPlayersSelectSchema: z.ZodType<Prisma.TourneyPlayersSelect> = z.object({
  id: z.boolean().optional(),
  steamId: z.boolean().optional(),
  player: z.boolean().optional(),
  profile: z.boolean().optional(),
  timezone: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TourneyTeamsArgsSchema)]).optional(),
}).strict()

export const TourneyPlayersCreateArgsSchema: z.ZodType<Prisma.TourneyPlayersCreateArgs> = z.object({
  select: TourneyPlayersSelectSchema.optional(),
  include: z.lazy(() => TourneyPlayersIncludeSchema).optional(),
  data: z.union([ TourneyPlayersCreateInputSchema,TourneyPlayersUncheckedCreateInputSchema ]),
}).strict() ;

export default TourneyPlayersCreateArgsSchema;
