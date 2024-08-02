import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsArgsSchema } from "../outputTypeSchemas/TourneyTeamsArgsSchema"

export const TourneyPlayersIncludeSchema: z.ZodType<Prisma.TourneyPlayersInclude> = z.object({
  team: z.union([z.boolean(),z.lazy(() => TourneyTeamsArgsSchema)]).optional(),
}).strict()

export default TourneyPlayersIncludeSchema;
