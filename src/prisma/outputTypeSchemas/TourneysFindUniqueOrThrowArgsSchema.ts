import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysIncludeSchema } from '../inputTypeSchemas/TourneysIncludeSchema'
import { TourneysWhereUniqueInputSchema } from '../inputTypeSchemas/TourneysWhereUniqueInputSchema'
import { TourneyTeamsFindManyArgsSchema } from "../outputTypeSchemas/TourneyTeamsFindManyArgsSchema"
import { UserArgsSchema } from "../outputTypeSchemas/UserArgsSchema"
import { TourneysCountOutputTypeArgsSchema } from "../outputTypeSchemas/TourneysCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const TourneysSelectSchema: z.ZodType<Prisma.TourneysSelect> = z.object({
  id: z.boolean().optional(),
  name: z.boolean().optional(),
  slug: z.boolean().optional(),
  type: z.boolean().optional(),
  description: z.boolean().optional(),
  rules: z.boolean().optional(),
  startDate: z.boolean().optional(),
  endDate: z.boolean().optional(),
  registrationsOpen: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  userId: z.boolean().optional(),
  teams: z.union([z.boolean(),z.lazy(() => TourneyTeamsFindManyArgsSchema)]).optional(),
  createdBy: z.union([z.boolean(),z.lazy(() => UserArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => TourneysCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const TourneysFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.TourneysFindUniqueOrThrowArgs> = z.object({
  select: TourneysSelectSchema.optional(),
  include: z.lazy(() => TourneysIncludeSchema).optional(),
  where: TourneysWhereUniqueInputSchema,
}).strict() ;

export default TourneysFindUniqueOrThrowArgsSchema;
