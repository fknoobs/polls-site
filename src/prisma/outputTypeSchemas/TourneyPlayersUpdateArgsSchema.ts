import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersIncludeSchema } from '../inputTypeSchemas/TourneyPlayersIncludeSchema'
import { TourneyPlayersUpdateInputSchema } from '../inputTypeSchemas/TourneyPlayersUpdateInputSchema'
import { TourneyPlayersUncheckedUpdateInputSchema } from '../inputTypeSchemas/TourneyPlayersUncheckedUpdateInputSchema'
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

export const TourneyPlayersUpdateArgsSchema: z.ZodType<Prisma.TourneyPlayersUpdateArgs> = z.object({
  select: TourneyPlayersSelectSchema.optional(),
  include: TourneyPlayersIncludeSchema.optional(),
  data: z.union([ TourneyPlayersUpdateInputSchema,TourneyPlayersUncheckedUpdateInputSchema ]),
  where: TourneyPlayersWhereUniqueInputSchema,
}).strict() ;

export default TourneyPlayersUpdateArgsSchema;
