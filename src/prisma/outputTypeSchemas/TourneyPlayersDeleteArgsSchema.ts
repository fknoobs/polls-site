import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersIncludeSchema } from '../inputTypeSchemas/TourneyPlayersIncludeSchema'
import { TourneyPlayersWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereUniqueInputSchema'
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

export const TourneyPlayersDeleteArgsSchema: z.ZodType<Prisma.TourneyPlayersDeleteArgs> = z.object({
  select: TourneyPlayersSelectSchema.optional(),
  include: TourneyPlayersIncludeSchema.optional(),
  where: TourneyPlayersWhereUniqueInputSchema,
}).strict() ;

export default TourneyPlayersDeleteArgsSchema;
