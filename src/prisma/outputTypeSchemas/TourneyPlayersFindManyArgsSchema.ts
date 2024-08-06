import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TourneyPlayersIncludeSchema } from '../inputTypeSchemas/TourneyPlayersIncludeSchema'
import { TourneyPlayersWhereInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereInputSchema'
import { TourneyPlayersOrderByWithRelationInputSchema } from '../inputTypeSchemas/TourneyPlayersOrderByWithRelationInputSchema'
import { TourneyPlayersWhereUniqueInputSchema } from '../inputTypeSchemas/TourneyPlayersWhereUniqueInputSchema'
import { TourneyPlayersScalarFieldEnumSchema } from '../inputTypeSchemas/TourneyPlayersScalarFieldEnumSchema'
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

export const TourneyPlayersFindManyArgsSchema: z.ZodType<Prisma.TourneyPlayersFindManyArgs> = z.object({
  select: TourneyPlayersSelectSchema.optional(),
  include: TourneyPlayersIncludeSchema.optional(),
  where: TourneyPlayersWhereInputSchema.optional(),
  orderBy: z.union([ TourneyPlayersOrderByWithRelationInputSchema.array(),TourneyPlayersOrderByWithRelationInputSchema ]).optional(),
  cursor: TourneyPlayersWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ TourneyPlayersScalarFieldEnumSchema,TourneyPlayersScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default TourneyPlayersFindManyArgsSchema;
