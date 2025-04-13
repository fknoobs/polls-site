import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneysIncludeSchema } from '../inputTypeSchemas/TourneysIncludeSchema'
import { TourneysWhereInputSchema } from '../inputTypeSchemas/TourneysWhereInputSchema'
import { TourneysOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneysOrderByWithRelationInputSchema'
import { TourneysWhereUniqueInputSchema } from '../inputTypeSchemas/TourneysWhereUniqueInputSchema'
import { TourneysScalarFieldEnumSchema } from '../inputTypeSchemas/TourneysScalarFieldEnumSchema'
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

export const TourneysFindFirstOrThrowArgsSchema: z.ZodType<Prisma.TourneysFindFirstOrThrowArgs> = z.object({
  select: TourneysSelectSchema.optional(),
  include: z.lazy(() => TourneysIncludeSchema).optional(),
  where: TourneysWhereInputSchema.optional(),
  orderBy: z.union([ TourneysOrderByWithRelationInputSchema.array(),TourneysOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneysWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TourneysScalarFieldEnumSchema,TourneysScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TourneysFindFirstOrThrowArgsSchema;
