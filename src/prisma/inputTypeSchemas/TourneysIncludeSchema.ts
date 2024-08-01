import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyTeamsFindManyArgsSchema } from "../outputTypeSchemas/TourneyTeamsFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TourneysCountOutputTypeArgsSchema } from "../outputTypeSchemas/TourneysCountOutputTypeArgsSchema"

export const TourneysIncludeSchema: z.ZodType<Prisma.TourneysInclude> = z.object({
  teams: z.union([z.boolean(),z.lazy(() => TourneyTeamsFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TourneysCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default TourneysIncludeSchema;
