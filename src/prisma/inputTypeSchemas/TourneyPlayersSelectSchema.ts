import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsArgsSchema } from "../outputTypeSchemas/TourneyTeamsArgsSchema"

export const TourneyPlayersSelectSchema: z.ZodType<Prisma.TourneyPlayersSelect> = z.object({
  id: z.boolean().optional(),
  steamId: z.boolean().optional(),
  player: z.boolean().optional(),
  profile: z.boolean().optional(),
  timezone: z.boolean().optional(),
  teamId: z.boolean().optional(),
  team: z.union([z.boolean(),z.lazy(() => TourneyTeamsArgsSchema)]).optional(),
}).strict()

export default TourneyPlayersSelectSchema;
